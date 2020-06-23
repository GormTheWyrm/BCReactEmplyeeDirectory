import React from "react";
import "../App.css";


// need to figure out how to make this appear as a single row in a table... 
//probably do that from directory
function Employee(props) {
    return (
        <div> <h3> Hello, This is an Employee  </h3>
        <p>{props.firstName}</p>
        
        </div>
        
        );
    }
    export default Employee;