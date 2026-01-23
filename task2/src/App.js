import React from 'react';
import Section from './components/Section';
import ProductList from './components/ProductList';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Лабораторная работа 2.2</h1>
      
      <Section title="Наши продукты">
        <ProductList />
      </Section>
      
      <Section title="Примеры карточек">
        <div style={{ display: 'flex', gap: '20px' }}>
          <Card title="Карточка 1">
            <p>Содержимое первой карточки</p>
          </Card>
          
          <Card title="Карточка 2" className="highlighted">
            <p>Вторая карточка с дополнительным классом</p>
          </Card>
        </div>
      </Section>
    </div>
  );
}

export default App;
