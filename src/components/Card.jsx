import React from "react";
function Card({title, children, className=''}) {
    const cardClass=`card ${className}`.trim();
    return (
        <div className={cardClass}>
            <h3>{title}</h3>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

export default Card;