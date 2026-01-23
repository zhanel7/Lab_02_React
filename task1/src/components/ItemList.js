import React from 'react';

/**
 * Компонент ItemList - демонстрация маппинга массива
 * Показывает правильное использование key prop
 */
function ItemList() {
  // Массив фруктов с расширенной информацией
  const fruits = [
    { 
      id: 1, 
      name: '🍎 Apple', 
      color: '#ff6b6b',
      price: 1.99,
      vitamins: ['A', 'C'],
      season: 'Осень'
    },
    { 
      id: 2, 
      name: '🍌 Banana', 
      color: '#ffd93d',
      price: 0.99,
      vitamins: ['B6', 'C'],
      season: 'Круглый год'
    },
    { 
      id: 3, 
      name: '🍒 Cherry', 
      color: '#ff4757',
      price: 3.99,
      vitamins: ['C', 'K'],
      season: 'Лето'
    },
    { 
      id: 4, 
      name: '🍇 Grape', 
      color: '#a55eea',
      price: 2.49,
      vitamins: ['C', 'K'],
      season: 'Осень'
    },
    { 
      id: 5, 
      name: '🍊 Orange', 
      color: '#ffa502',
      price: 1.49,
      vitamins: ['C'],
      season: 'Зима'
    },
    { 
      id: 6, 
      name: '🥝 Kiwi', 
      color: '#20bf6b',
      price: 2.99,
      vitamins: ['C', 'K'],
      season: 'Круглый год'
    }
  ];

  return (
    <div className="listContainer">
      <div className="listHeader">
        <h3 className="listTitle">Список фруктов с .map()</h3>
        <p className="listSubtitle">Каждый элемент имеет уникальный key={'{id}'}</p>
      </div>

      <div className="fruitsGrid">
        {fruits.map((fruit) => (
          <div 
            key={fruit.id} 
            className="fruitCard"
            style={{ borderLeftColor: fruit.color }}
          >
            <div className="fruitHeader">
              <span className="fruitEmoji">{fruit.name.split(' ')[0]}</span>
              <div>
                <h4 className="fruitName">{fruit.name.split(' ')[1]}</h4>
                <p className="fruitId">ID: {fruit.id}</p>
              </div>
            </div>

            <div className="fruitDetails">
              <div className="detailRow">
                <span className="detailLabel">Цена:</span>
                <span className="detailValue">${fruit.price}</span>
              </div>
              <div className="detailRow">
                <span className="detailLabel">Сезон:</span>
                <span className="detailValue seasonBadge">{fruit.season}</span>
              </div>
              <div className="detailRow">
                <span className="detailLabel">Витамины:</span>
                <div className="vitaminsContainer">
                  {fruit.vitamins.map((vitamin, index) => (
                    <span key={index} className="vitaminBadge">
                      {vitamin}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="fruitActions">
              <button 
                className="actionButton addButton"
                onClick={() => alert(`Добавлено: ${fruit.name.split(' ')[1]}`)}
              >
                Добавить
              </button>
              <button className="actionButton infoButton">
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="listSummary">
        <div className="summaryCard">
          <div className="summaryItem">
            <span className="summaryLabel">Всего фруктов:</span>
            <span className="summaryValue">{fruits.length}</span>
          </div>
          <div className="summaryItem">
            <span className="summaryLabel">Средняя цена:</span>
            <span className="summaryValue">
              ${(fruits.reduce((sum, fruit) => sum + fruit.price, 0) / fruits.length).toFixed(2)}
            </span>
          </div>
          <div className="summaryItem">
            <span className="summaryLabel">Уникальных ID:</span>
            <span className="summaryValue">{fruits.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;