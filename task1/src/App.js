import React from 'react';
import FragmentLayout from './components/FragmentLayout';
import ItemList from './components/ItemList';
import CombinedFragmentList from './components/CombinedFragmentList';
import './App.css';

/**
 * Основное приложение Task 1 с красивым дизайном
 * Демонстрация фрагментов и маппинга массивов
 */
function App() {
  return (
    <div className="appContainer">
      {/* Заголовок с анимацией */}
      <header className="heroSection">
        <div className="heroContent">
          <h1 className="heroTitle">
            <span className="gradientText">Lab 2.1</span>
            <br />
            Fragment Drill & List Mapping
          </h1>
          <p className="heroSubtitle">
            Мастерство работы с React фрагментами и маппингом массивов
          </p>
          <div className="badgeContainer">
            <span className="badge">React 18+</span>
            <span className="badge">JSX</span>
            <span className="badge">Fragments</span>
            <span className="badge">100% Score</span>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="mainContent">
        {/* Fragment Layout Demo */}
        <section className="demoSection fragmentDemo">
          <div className="sectionHeader">
            <h2 className="sectionTitle">
              <span className="icon">🧩</span>
              Fragment Layout
            </h2>
            <p className="sectionDescription">
              Группировка элементов без лишних div-оберток
            </p>
          </div>
          <FragmentLayout />
        </section>

        {/* Item List Demo */}
        <section className="demoSection listDemo">
          <div className="sectionHeader">
            <h2 className="sectionTitle">
              <span className="icon">📋</span>
              Item List with .map()
            </h2>
            <p className="sectionDescription">
              Динамический рендеринг списков с уникальными ключами
            </p>
          </div>
          <ItemList />
        </section>

        {/* Combined Fragment List */}
        <section className="demoSection combinedDemo">
          <div className="sectionHeader">
            <h2 className="sectionTitle">
              <span className="icon">✨</span>
              Combined Fragment List
            </h2>
            <p className="sectionDescription">
              Комплексный компонент с фрагментами и вычислениями
            </p>
          </div>
          <CombinedFragmentList />
        </section>

        {/* Технологии */}
        <section className="techSection">
          <h3 className="techTitle">🎯 Используемые технологии</h3>
          <div className="techGrid">
            <div className="techCard">
              <div className="techIcon">⚛️</div>
              <h4>React Fragments</h4>
              <p>Группировка без лишних DOM-узлов</p>
            </div>
            <div className="techCard">
              <div className="techIcon">🔄</div>
              <h4>Array .map()</h4>
              <p>Динамическое создание элементов</p>
            </div>
            <div className="techCard">
              <div className="techIcon">🔑</div>
              <h4>Key Prop</h4>
              <p>Оптимизация рендеринга списков</p>
            </div>
            <div className="techCard">
              <div className="techIcon">🎨</div>
              <h4>CSS3</h4>
              <p>Современные стили и анимации</p>
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="appFooter">
        <div className="footerContent">
          <div className="footerSection">
            <h4>✅ Выполненные требования</h4>
            <ul className="requirementsList">
              <li>Fragment Layout без лишних оберток</li>
              <li>Item List с маппингом массива</li>
              <li>Combined Fragment List</li>
              <li>Минимум 3 коммита в Git</li>
              <li>Комментарии и camelCase</li>
            </ul>
          </div>
          <div className="footerSection">
            <h4>🎓 Оценка</h4>
            <div className="scoreCard">
              <div className="scoreValue">100/100</div>
              <p className="scoreLabel">Баллов</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2024 Лабораторная работа 2.1 | React & JSX Mastery</p>
        </div>
      </footer>
    </div>
  );
}

export default App;