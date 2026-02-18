import React from "react";
import Card from "./components/Card";
import ProductList from "./components/ProductList";
import Section from "./components/Section";
function App() {
  return (
    <div className="App">
      <h1>Lab 2.2: Custom Components & Fragments</h1>
      <Section title="Card Examples">
        <Card title="First Card">
      <p>Это содержимое первой карточки.Сюда можно поместить любой JSX.</p>
      </Card>
      <Card title="Second Card" className="highlight">
        <p>У этой карточки дополнительный className 'highlight'</p>
      </Card>
    </Section>

    <Section title="Список продуктов">
      <ProductList />
    </Section>
    </div>
  );
}
 export default App;