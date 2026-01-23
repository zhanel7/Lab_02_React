import React from 'react';

/**
 * Компонент FragmentLayout - демонстрация React фрагментов
 * Использует <>...</> для группировки элементов без дополнительного div
 */
function FragmentLayout() {
  return (
    <>
      {/* Header с анимированным фоном */}
      <div className="fragmentContainer">
        <header className="fragmentHeader">
          <div className="headerContent">
            <div className="headerIcon">🏛️</div>
            <div>
              <h3 className="fragmentTitle">Fragment Header</h3>
              <p className="fragmentSubtitle">Без лишнего wrapper div</p>
            </div>
          </div>
          <div className="headerStats">
            <div className="statItem">
              <span className="statNumber">3</span>
              <span className="statLabel">Элемента</span>
            </div>
            <div className="statItem">
              <span className="statNumber">0</span>
              <span className="statLabel">Лишних div</span>
            </div>
          </div>
        </header>

        {/* Main с полезной информацией */}
        <main className="fragmentMain">
          <div className="mainContent">
            <h4 className="mainTitle">📦 Почему фрагменты важны?</h4>
            <div className="benefitsGrid">
              <div className="benefitCard">
                <div className="benefitIcon">⚡</div>
                <h5>Производительность</h5>
                <p>Меньше DOM узлов = лучше производительность</p>
              </div>
              <div className="benefitCard">
                <div className="benefitIcon">🎯</div>
                <h5>Чистый код</h5>
                <p>Без лишних оберток в разметке</p>
              </div>
              <div className="benefitCard">
                <div className="benefitIcon">🔧</div>
                <h5>Гибкость</h5>
                <p>Можно возвращать несколько элементов</p>
              </div>
            </div>
            
            <div className="codeExample">
              <h5>Пример кода:</h5>
              <pre className="codeBlock">
{`// Использование фрагментов
<>
  <Header />
  <MainContent />
  <Footer />
</>

// Вместо
<div>
  <Header />
  <MainContent />
  <Footer />
</div>`}
              </pre>
            </div>
          </div>
        </main>

        {/* Footer с контактной информацией */}
        <footer className="fragmentFooter">
          <div className="footerContent">
            <div className="footerSection">
              <h5 className="footerTitle">Lab 2.1</h5>
              <p>Fragment Drill & List Mapping</p>
            </div>
            <div className="footerSection">
              <h5 className="footerTitle">Требования</h5>
              <p>50 баллов | 3 компонента</p>
            </div>
            <div className="footerSection">
              <h5 className="footerTitle">Статус</h5>
              <p className="statusCompleted">✅ Выполнено</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FragmentLayout;