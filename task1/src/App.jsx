import React from 'react'
import FragmentLayout from './components/FragmentLayout';
import ItemList from './components/ItemList';
import CombinedList from './components/CombinedList';

function App() {
  return (
    <div className='App'>
      <h1>Lab 2.1: Fragment & List Demo</h1>
      <section>
        <h2>Task 1: Fragment Layout</h2>
        <FragmentLayout/>
      </section>
      <section>
       <h2>Task 2: Item List</h2>
        <ItemList />
      </section>
      <section>
        <h2>Task 3: Combined Fragment + List</h2>
      </section>
    </div>
  );
}

export default App;