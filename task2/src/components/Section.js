// Section.js
import React from 'react';

/**
 * Компонент Section - секция с использованием фрагментов
 * Демонстрация фрагментов и композиции компонентов
 * @param {string} title - Заголовок секции
 * @param {React.ReactNode} children - Содержимое секции
 * @returns {JSX.Element} Секция без лишних оберток
 */
function Section({ title, children }) {
  return (
    <>
      <h2 className="sectionTitle">{title}</h2>
      <div className="sectionContent">
        {children}
      </div>
    </>
  );
}

export default Section;