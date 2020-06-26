import React from "react";
import OptionsTab from "../components/OptionsTab";
import "../App.css";
import TableHead from "../components/TableHead"
import TableRow from "../components/TableRow"
// consider renaming DirectoryTable?
import EmployeeList from  "../utils/EmployeeList.json"



// let employeeArr = [
//     { id: "ae01",
//         firstName: "Mike",
//         lastName: "Wizowski"
//     },
//     { id: "ae02",
//          firstName: "Shawn", 
//         lastName: "Fawnson"
//     },
//     {   id: "ae03",
//          firstName: "Karla",
//         lastName: "Landsdottir"
//     }
//     //need to check how to do this right
//     //does this need to be in state?

// ]


// function Directory() {
class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testVar: 17,
            sortAscending: true,
            filter: "all",
            //data is not in the state right now... 
            employeeArray: [{id:"zz1", firstName: "test1", lastName: "est2"}]


        };

        //I can set state in a constructor or not have a constructor and just set state once
        //but after state is set setState needs to be called to update it
    }
    getEmployees() {
        // this needs to pull in the employee array.... and set it into state?
        this.setState({
            testVar: 12
        })
    }

    componentDidMount() {
        //runs after output is rendered to DOM...
        //so put anything that needs to function each time compenent is rendered here
        this.getEmployees();    //this should populate employee data...
        //how?

    }
    componentWillUpdate() {
        //sounds like this should be used as a deconstructor... but 

    }
    render() {
        return (
            <div>
                <OptionsTab />
                <table className="table table-dark">
                    <thead>
                        <TableHead />
                    </thead>
                    <tbody>
                        <TableRow 
                            // displasyVar ={this.state.value}
                            displayVar={"empty"}
                            // col2={"empty"}
                            // there has to be a better way to do this...
                            // xxx={this.state.datapoint}
                        />
                        <TableRow />
                        {EmployeeList[0].id}    
                        {/* this might work... getting closer */}
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