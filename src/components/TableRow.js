import React from "react";
import "../App.css";
import Column from "./Column"

// should I rename this EmployeeRow?


// need to figure out how to make this appear as a single row in a table... 
//probably do that from directory
function TableRow(props) {
    return (
        <div className={"row"}>
            <Column displayVar={props.myId} />
            <Column displayVar={"First Name_placeholder"} />
            <Column displayVar={"Last Name_placeholder"} />
            <Column displayVar={"Department_placeholder"} />
            <Column displayVar={props.displayVar} />
            {/* <Column displayVar={this.state.testVar} */}
            {/* <Column displayVar={props.col1} */}
            {/* role */}
            {/* salary */}
            {/* add an employee rating or review; 1-5 perhaps? */}
        </div>
        );
}
export default TableRow;

    // this should be a single row of informaion; 
    //so a bunch of columns displaying a specific stat for each empoloyee