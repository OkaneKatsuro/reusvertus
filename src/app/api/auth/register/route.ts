import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email и пароль обязательны' },
        { status: 400 }
      );
    }

    // Проверка существования пользователя
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Пользователь с таким email уже существует' },
        { status: 400 }
      );
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание пользователя
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || null,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      { message: 'Пользователь успешно зарегистрирован', user },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration error:', error);
    // Если это ошибка подключения к базе данных
    if (error.code === 'P1001' || error.message?.includes('Can\'t reach database')) {
      return NextResponse.json(
        { error: 'Ошибка подключения к базе данных. Проверьте настройки подключения.' },
        { status: 503 }
      );
    }
    return NextResponse.json(
      { error: 'Ошибка при регистрации', details: process.env.NODE_ENV === 'development' ? error.message : undefined },
      { status: 500 }
    );
  }
}

