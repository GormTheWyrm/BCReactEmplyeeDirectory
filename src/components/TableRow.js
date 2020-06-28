import React from "react";
import "../App.css";


// should I rename this EmployeeRow?


// need to figure out how to make this appear as a single row in a table... 
//probably do that from directory
function TableRow(props) {
    return (
        <tr>

            <td>
                <span>{props.myId}</span>
            </td>
            <td>
                <span>{props.firstName}</span>
            </td>
            <td>
                <span>{props.lastName}</span>
            </td>
            <td>
                <span>{props.department}</span>
            </td>
            <td>
                <span>{props.role}</span>
            </td>
            <td>
                <span>${props.salary}</span>
            </td>
            <td>
                <span>{props.rating}</span>
            </td>

        </tr>


    );
}
export default TableRow;

    // this should be a single row of informaion; 
    //so a bunch of columns displaying a specific stat for each empoloyee