import React from 'react';

// Компонент Card - задание 1
function Card({ title, children, className = '' }) {
  const cardClassName = `card ${className}`.trim();
  
  return (
    <div className={cardClassName}>
      <h3>{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;