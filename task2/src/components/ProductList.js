import React from 'react';
import Card from './Card';

// Компонент ProductList - задание 2
function ProductList() {
  const products = [
    { id: 1, name: 'Ноутбук', price: 999.99, category: 'Электроника' },
    { id: 2, name: 'Мышь', price: 29.99, category: 'Аксессуары' },
    { id: 3, name: 'Клавиатура', price: 89.99, category: 'Аксессуары' }
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          className="product-card"
        >
          <p>Цена: ${product.price.toFixed(2)}</p>
          <p>Категория: {product.category}</p>
        </Card>
      ))}
    </div>
  );
}

export default ProductList;