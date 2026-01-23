import React from 'react';

function Card({ title, children, className = '', onClick }) {
  const cardClasses = `card ${className}`.trim();
  
  return (
    <div className={cardClasses} onClick={onClick}>
      <h3 className="cardTitle">{title}</h3>
      <div className="cardContent">
        {children}
      </div>
    </div>
  );
}

export default Card;