// ProductList.js
import React from 'react';
import Card from './Card';

/**
 * Компонент ProductList - список продуктов с маппингом
 * Демонстрация .map() и использования key
 */
function ProductList() {
  // Массив продуктов
  const products = [
    { id: 1, name: 'Ноутбук Gaming Pro', price: 1299.99, category: 'Электроника' },
    { id: 2, name: 'Беспроводные наушники', price: 199.99, category: 'Аудио' },
    { id: 3, name: 'Механическая клавиатура', price: 149.99, category: 'Аксессуары' },
    { id: 4, name: 'Игровая мышь', price: 79.99, category: 'Аксессуары' },
    { id: 5, name: 'Монитор 27"', price: 349.99, category: 'Электроника' }
  ];

  return (
    <div className="productListContainer">
      <h2 className="sectionHeader">Наши продукты</h2>
      
      <div className="productsGrid">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            className="productCard"
          >
            <div className="productInfo">
              <p className="productPrice">
                <strong>Цена:</strong> ${product.price.toFixed(2)}
              </p>
              <p className="productCategory">
                <strong>Категория:</strong> {product.category}
              </p>
              <p className="productId">
                <strong>ID:</strong> {product.id}
              </p>
              <button 
                className="addButton"
                onClick={() => alert(`Товар "${product.name}" добавлен в корзину! 🛒`)}
>
  Добавить в корзину
</button>
            </div>
          </Card>
        ))}
      </div>
      
      <p className="totalProducts">
        Всего продуктов: {products.length}
      </p>
    </div>
  );
}

export default ProductList;