import React from "react";
import OptionsTab from "../components/OptionsTab";
import "../App.css";
import TableHead from "../components/TableHead"
import TableRow from "../components/TableRow"
// consider renaming DirectoryTable?
import EmployeeList from "../utils/EmployeeList.json"



// function Directory() {
class Directory extends React.Component {
    state = {
        sortAscending: true,
        filter: "all",
        //data is not in the state right now... 
        EmployeeList
        //this should set EmployeeList to the json info
    };

//call setState({partOfStateBeingSet}) to update state

getEmployees() {
    // this needs to pull in the employee array.... and set it into state?
    this.setState({
    })
    //delete this function?
}

componentDidMount() {
    //runs after output is rendered to DOM...
    //so put anything that needs to function each time compenent is rendered here
    this.getEmployees();    //this should populate employee data...
    //how?
console.log(EmployeeList);
}
// componentWillUpdate() {
//     //sounds like this should be used as a deconstructor... but 

// }

// going to need to use map method to turn array into a bunch of components!

render() {
    return (
        <div>
            <OptionsTab />
            <table className="table table-dark">
                <thead>
                    <TableHead />
                </thead>
                <tbody>
                    {this.state.EmployeeList.map(employee => ( 
                        <TableRow 
                        myId={employee.id}
                        firstName={employee.firstName}
                        lastName={employee.lastName}
                        department={employee.department}
                        role={employee.role}
                        salary={employee.salary}    //may want to look up formatting options to make this look like $$
                        rating={employee.rating}
                        />
                        // firstname={test}
                        

                    ))}

                </tbody>
                {/* <p>TestVar {this.state.testVar}</p> */}
            </table>
        </div>
    );
    // need to figure out how to make this appear multiple times...
    //and tables https://getbootstrap.com/docs/4.5/content/tables/
    // https://www.w3schools.com/html/html_tables.asp

}
}
export default Directory;