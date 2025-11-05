import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Пробуем найти по ID, если не найдено - ищем по коду
    let product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      // Попытка найти по коду (для обратной совместимости)
      product = await prisma.product.findUnique({
        where: { code: id },
      });
    }

    if (!product) {
      return NextResponse.json(
        { error: 'Товар не найден' },
        { status: 404 }
      );
    }

    // Парсинг JSON полей
    const parsedProduct = {
      ...product,
      colors: product.colors ? JSON.parse(product.colors) : null,
      sizes: product.sizes ? JSON.parse(product.sizes) : null,
    };

    return NextResponse.json({ product: parsedProduct }, { status: 200 });
  } catch (error) {
    console.error('Get product error:', error);
    return NextResponse.json(
      { error: 'Ошибка при получении товара' },
      { status: 500 }
    );
  }
}

