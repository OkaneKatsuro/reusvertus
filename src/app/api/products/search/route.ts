import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Поиск товаров по названию
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query || query.trim().length === 0) {
      return NextResponse.json({ products: [] }, { status: 200 });
    }

    const searchTerm = query.trim().toLowerCase();

    // Для SQLite получаем все товары и фильтруем вручную
    // (так как contains с case-insensitive не поддерживается в SQLite)
    const allProducts = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
    });

    // Фильтрация по названию (case-insensitive)
    const filteredProducts = allProducts
      .filter(product => product.name.toLowerCase().includes(searchTerm))
      .slice(0, 10); // Ограничиваем до 10 результатов

    // Парсинг JSON полей
    const parsedProducts = filteredProducts.map(product => ({
      id: product.id,
      name: product.name,
      code: product.code,
      price: product.price,
      category: product.category,
    }));

    return NextResponse.json({ products: parsedProducts }, { status: 200 });
  } catch (error) {
    console.error('Search products error:', error);
    return NextResponse.json(
      { error: 'Ошибка при поиске товаров' },
      { status: 500 }
    );
  }
}

