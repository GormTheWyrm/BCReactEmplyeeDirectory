import React from "react";
import "../App.css";

function Column(props) {
    return (
        <td> 
            <span>{props.displayVar}</span>
       </td>
       
        
        );
    }
    export default Column;
    // 6 columns in each row right now...