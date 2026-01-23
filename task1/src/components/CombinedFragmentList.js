import React from "react";

function CombinedFragmentList() {
    const items=[
        {id:1, name:'Элемент 1'},
        {id:2, name:'Элемент 2'},
        {id:3, name:'Элемент 3'},
    ];

    return (
        <>
         <h2>Комбинированный список</h2>
         <ul>
            {items.map((item)=>(
                <li key={item.id}>
                    {item.name}
                </li>
            ))}
            </ul>
            
            <p>Всего элементов: {items.length}</p>
            </>
    );
}

export default CombinedFragmentList;