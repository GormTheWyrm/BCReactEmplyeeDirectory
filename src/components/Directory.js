import React from "react";
import OptionsTab from "./OptionsTab";
import "../App.css";
import Employee from "./Employee"

// function Directory() {
class Directory extends React.Component {



    render() {
        return (
            <div>
                <OptionsTab />
                <Employee />
            </div>

        );
    }
}
export default Directory;