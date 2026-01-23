import React from 'react';
import FragmentLayout from './components/FragmentLayout';
import ItemList from './components/ItemList';
import CombinedFragmentList from './components/CombinedFragmentList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Лабораторная работа 2.1</h1>
      
      <section>
        <h2>Задание 1: Fragment Layout</h2>
        <FragmentLayout />
      </section>
      
      <section>
        <h2>Задание 2: Item List</h2>
        <ItemList />
      </section>
      
      <section>
        <h2>Задание 3: Combined Fragment List</h2>
        <CombinedFragmentList />
      </section>
    </div>
  );
}

export default App;