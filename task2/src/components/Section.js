import React from 'react';

// Компонент Section - задание 3
function Section({ title, children }) {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </>
  );
}

export default Section;