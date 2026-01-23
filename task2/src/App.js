import React from 'react';
import Section from './components/Section';
import ProductList from './components/ProductList';
import Card from './components/Card';
import './App.css';


function App() {
  return (
    <div className="appContainer">
      <header className="appHeader">
        <h1 className="mainTitle">Lab 2.2: Custom JSX Elements & Dynamic Props</h1>
        <p className="subtitle">Демонстрация кастомных компонентов, динамических props и фрагментов</p>
      </header>

      <main className="mainContent">
        {/* Секция 1: ProductList с маппингом */}
        <Section title="🛒 Список продуктов с маппингом">
          <ProductList />
        </Section>

        {/* Секция 2: Примеры Card компонента */}
        <Section title="🎴 Примеры Card компонента">
          <div className="cardExamples">
            <Card title="Карточка с текстом" className="textCard">
              <p>Это пример карточки с простым текстовым содержимым.</p>
              <p>Компонент Card принимает динамические props для настройки.</p>
            </Card>

            <Card title="Карточка с кнопкой" className="actionCard">
              <p>Эта карточка содержит интерактивные элементы.</p>
              <div className="buttonGroup">
                <button className="primaryButton">Основная кнопка</button>
                <button className="secondaryButton">Вторая кнопка</button>
              </div>
            </Card>

            <Card title="Информационная карточка" className="infoCard">
              <ul className="infoList">
                <li>✅ Поддерживает children</li>
                <li>✅ Принимает className</li>
                <li>✅ Динамический заголовок</li>
                <li>✅ Переиспользуемый компонент</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Секция 3: Демонстрация фрагментов */}
        <Section title="🧩 Демонстрация React фрагментов">
          <div className="fragmentDemo">
            <p>Этот компонент использует фрагменты для группировки элементов без лишних div.</p>
            <div className="codeExample">
              <code>
                {'<>'}<br/>
                {'  <h2>Заголовок</h2>'}<br/>
                {'  <p>Содержимое</p>'}<br/>
                {'</>'}
              </code>
            </div>
          </div>
        </Section>
      </main>

      <footer className="appFooter">
        <p>✅ Task 2 выполнен в соответствии со всеми требованиями</p>
        <p className="requirements">
          • Кастомные компоненты • Динамические props • Маппинг массивов • Фрагменты
        </p>
      </footer>
    </div>
  );
}

export default App;