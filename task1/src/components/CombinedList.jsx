import React from "react";
import ItemList from "./ItemList";

function CombinedList() {
    const items=[
        {id:1, name:'Apple'},
        {id:2, name:'Banana'},
        {id:3, name:'Cherry'},
    ];

    return (
        <>
        <h2>Fruit List</h2>
        <ItemList />
        <p>Total: {items.length} items</p>
        </>
    );
}

export default CombinedList;