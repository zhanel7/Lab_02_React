import React from 'react';

/**
 * Компонент CombinedFragmentList - комбинированный пример
 * Объединяет фрагменты, маппинг и динамические вычисления
 */
function CombinedFragmentList() {
  // Массив книг по React
  const books = [
    { 
      id: 101, 
      title: 'React and React Native', 
      author: 'Sakhniuk & Boduch', 
      year: 2024,
      pages: 450,
      level: 'Intermediate',
      rating: 4.7
    },
    { 
      id: 102, 
      title: 'Learning React', 
      author: 'Alex Banks & Eve Porcello', 
      year: 2020,
      pages: 350,
      level: 'Beginner',
      rating: 4.5
    },
    { 
      id: 103, 
      title: 'Fullstack React', 
      author: 'Anthony Accomazzo', 
      year: 2019,
      pages: 600,
      level: 'Advanced',
      rating: 4.8
    },
    { 
      id: 104, 
      title: 'React Explained', 
      author: 'Zac Gordon', 
      year: 2021,
      pages: 280,
      level: 'Beginner',
      rating: 4.3
    },
    { 
      id: 105, 
      title: 'The Road to React', 
      author: 'Robin Wieruch', 
      year: 2022,
      pages: 320,
      level: 'Intermediate',
      rating: 4.6
    }
  ];

  // Вычисляем статистику
  const totalBooks = books.length;
  const averageRating = (books.reduce((sum, book) => sum + book.rating, 0) / books.length).toFixed(1);
  const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
  const newestBook = Math.max(...books.map(book => book.year));

  return (
    <>
      {/* Заголовок секции */}
      <div className="combinedHeader">
        <h2 className="combinedTitle">
          <span className="titleIcon">📚</span>
          Библиотека React книг
        </h2>
        <p className="combinedSubtitle">
          Комбинированный пример с фрагментами и динамическими вычислениями
        </p>
      </div>

      {/* Статистика */}
      <div className="statsContainer">
        <div className="statCard">
          <div className="statIcon">📊</div>
          <div className="statInfo">
            <div className="statValue">{totalBooks}</div>
            <div className="statLabel">Всего книг</div>
          </div>
        </div>
        <div className="statCard">
          <div className="statIcon">⭐</div>
          <div className="statInfo">
            <div className="statValue">{averageRating}</div>
            <div className="statLabel">Средний рейтинг</div>
          </div>
        </div>
        <div className="statCard">
          <div className="statIcon">📖</div>
          <div className="statInfo">
            <div className="statValue">{totalPages}</div>
            <div className="statLabel">Страниц всего</div>
          </div>
        </div>
        <div className="statCard">
          <div className="statIcon">🎯</div>
          <div className="statInfo">
            <div className="statValue">{newestBook}</div>
            <div className="statLabel">Новейшая книга</div>
          </div>
        </div>
      </div>

      {/* Список книг */}
      <div className="booksContainer">
        <div className="booksGrid">
          {books.map((book) => (
            <div key={book.id} className="bookCard">
              <div className="bookHeader">
                <div className="bookLevel" data-level={book.level.toLowerCase()}>
                  {book.level}
                </div>
                <div className="bookRating">
                  <span className="ratingStars">{"⭐".repeat(Math.floor(book.rating))}</span>
                  <span className="ratingValue">{book.rating}</span>
                </div>
              </div>
              
              <div className="bookContent">
                <h3 className="bookTitle">{book.title}</h3>
                <p className="bookAuthor">Автор: {book.author}</p>
                
                <div className="bookDetails">
                  <div className="bookDetail">
                    <span className="detailIcon">📅</span>
                    <span>{book.year} год</span>
                  </div>
                  <div className="bookDetail">
                    <span className="detailIcon">📄</span>
                    <span>{book.pages} страниц</span>
                  </div>
                  <div className="bookDetail">
                    <span className="detailIcon">🆔</span>
                    <span>ID: {book.id}</span>
                  </div>
                </div>
              </div>

              <div className="bookActions">
                <button 
                  className="bookButton readButton"
                  onClick={() => alert(`Чтение: ${book.title}`)}
                >
                  Читать
                </button>
                <button className="bookButton saveButton">
                  Сохранить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Вывод с вычислениями */}
      <div className="calculationOutput">
        <div className="outputCard">
          <h4 className="outputTitle">📝 Динамические вычисления:</h4>
          <div className="outputContent">
            <p>
              <strong>Всего книг:</strong> {totalBooks} <br />
              <strong>Средний рейтинг:</strong> {averageRating} из 5 <br />
              <strong>Общее количество страниц:</strong> {totalPages} <br />
              <strong>Средняя длина книги:</strong> {(totalPages / totalBooks).toFixed(0)} страниц
            </p>
            <div className="outputNote">
              ⚡ Все вычисления выполнены динамически с помощью JavaScript
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CombinedFragmentList;