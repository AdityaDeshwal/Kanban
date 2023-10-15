import React from "react";
import './SmallNavbar.css';

function SmallNavbar(props){
    const object=props.object;
    return(
        <>
            <div className="sml-nav">
                <h1>{object}</h1>
            </div>
        </>
    );
}

export default SmallNavbar;