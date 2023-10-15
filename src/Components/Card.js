import React from "react";
import './Card.css';
function Card(props){
    const object=props.object;
    console.log(object);
    const id=object.id;
    const title=object.title;
    
    return (
        <>
            <div className="card">
                <h4>{id}</h4>
                <p>{title}</p>
            </div>
        </>
    );
}
export default Card;