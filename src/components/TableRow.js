import React from "react";
import "../App.css";
import Column from "./Column"

// should I rename this EmployeeRow?


// need to figure out how to make this appear as a single row in a table... 
//probably do that from directory
function TableRow(props) {
    return (
        <tr>
             <Column displayVar={props.myId} />
            <Column displayVar={props.firstName} />
            <Column displayVar={props.lastName} />
            <Column displayVar={props.department} />
            <Column displayVar={props.role} />
            <Column displayVar={props.salary} />
            <Column displayVar={props.rating} />
        </tr>


        );
}
export default TableRow;

    // this should be a single row of informaion; 
    //so a bunch of columns displaying a specific stat for each empoloyee