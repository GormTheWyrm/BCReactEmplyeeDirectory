import React from "react";
import "../App.css";

function OptionsTab(props) {
    return (
    
    
    <div className="row">
        <div className={"col-12"}>
        <p>This will contain buttons for filtering, 
    sorting and displaying employees</p>
    <p>Filter Options: Department</p>
    <p>add a filter by role later</p>
    <p>Sort by id, department, firstname or lastname</p>
    <p>add a ascending or descending order toggle later</p>
    {/* filter by should be a dropdown - should I grab the dropdown options from variables or hardcode them? */}
    {/* sort ascending or descending should be a toggle or a single button */}
    {/*  */}
    </div>
    </div>
    );
    }
    export default OptionsTab;