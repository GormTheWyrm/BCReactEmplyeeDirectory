import React from "react";
import "../App.css";
import Column from "./Column"

// should I rename this EmployeeRow?

// need to figure out how to make this appear as a single row in a table... 
//probably do that from directory
function TableHead(props) {
    return (
        <div className={"row"}>
            <Column displayVar={"ID"} />
            <Column displayVar={"First Name"} />
            <Column displayVar={"Last Name"} />
            <Column displayVar={"Department"} />
            {/* role */}
            {/* salary */}
            {/* add an employee rating or review; 1-5 perhaps? */}
        </div>
        );
}
export default TableHead;

    // this should be a single row of informaion; 
    //so a bunch of columns displaying a specific stat for each empoloyee
