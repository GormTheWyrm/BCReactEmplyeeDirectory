import React from "react";
import "../App.css";

function Column(props) {
    return (
        <div className={"col-sm"}> 
            <span>{props.displayVar}</span>
       </div>
       
        
        );
    }
    export default Column;
    // 6 columns in each row right now...