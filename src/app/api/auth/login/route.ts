import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email и пароль обязательны' },
        { status: 400 }
      );
    }

    // Поиск пользователя
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Не логируем ошибку, это нормальная ситуация
      return NextResponse.json(
        { error: 'Неверный email или пароль' },
        { status: 401 }
      );
    }

    // Проверка пароля
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      // Не логируем ошибку, это нормальная ситуация
      return NextResponse.json(
        { error: 'Неверный email или пароль' },
        { status: 401 }
      );
    }

    // Возврат данных пользователя (без пароля)
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { message: 'Вход выполнен успешно', user: userWithoutPassword },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Login error:', error);
    // Если это ошибка подключения к базе данных
    if (error.code === 'P1001' || error.message?.includes('Can\'t reach database')) {
      return NextResponse.json(
        { error: 'Ошибка подключения к базе данных. Проверьте настройки подключения.' },
        { status: 503 }
      );
    }
    return NextResponse.json(
      { error: 'Ошибка при входе', details: process.env.NODE_ENV === 'development' ? error.message : undefined },
      { status: 500 }
    );
  }
}

