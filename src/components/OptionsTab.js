import React from "react";
import "../App.css";

function OptionsTab(props) {
    return (

        <div>
            <div className="row">
                <div className={"col-12"}>
                    <p>This will contain buttons for filtering,
    sorting and displaying employees</p>
                    <p>Filter Options: Department</p>
                    <p>add a filter by role later</p>
                    <p>Sort by id, department, firstname or lastname</p>
                    <p>add a ascending or descending order toggle later</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <select className="custom-select">
                        {/* <select value={props.xxx} onChange={props.xxx}> */}
                        <option defaultValue="all">Sort By: all </option>
                        <option value="Propaganda">Filter By: Propaganda Department</option>
                        <option value="2">Filter By: 2 </option>
                        <option value="3">Filter By: 3</option>
                    </select>
                </div>
                <div className="col-6">
                    <select className="custom-select">
                        <option defaultValue="id">Sort By: Id </option>
                        <option value="firstName">Sort By: First Name</option>
                        <option value="lastName">Sort By: Last Name</option>
                        <option value="department">Sort By: Department</option>
                    </select>

                </div>
            </div >
        </div >
    );
}
export default OptionsTab;