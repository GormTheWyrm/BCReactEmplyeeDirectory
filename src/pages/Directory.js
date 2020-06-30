import React from "react";
import OptionsTab from "../components/OptionsTab";
import "../App.css";
import TableHead from "../components/TableHead"
import TableRow from "../components/TableRow"
// consider renaming DirectoryTable?
import EmployeeList from "../utils/EmployeeList.json"



// next step should be to write a function that sorts and filters the viewList based on values of 
//filter and sort in state!
//... then I need to attach input to that...


class Directory extends React.Component {
    state = {
        // sortAscending: true,
        filter: "all",  //ideally I shoudl add some code to change things into lowercase
        sort: "default",
        //data is not in the state right now... 
        viewList: EmployeeList
        //this should initialize view list to the json data
    };

    //call setState({partOfStateBeingSet}) to update state


    sortTable() {
        //this should change the viewlist based on changes to the filter and sort state 
        //imputs happen elsewhere
        //where does this need to be called?!   after change... perhaps on submit?
        //not on sumbit, either in the function that runs on submit or a react method that updates 
        //called in componentDidUpdate !?
        //this.state.filter
        //this.state.sort

        let myFilter = "Propaganda";   //change this to this.state.filter after testing!
        //need to change this to in input or dropdown!
        let mySort = "first name";
        if (this.state.filter === "All") {
            //set viewList to EMployeeList
            this.setState({ viewList: EmployeeList })


        } else {
            //set view list to a filtered array
            //will need to change this so that it displays different options
            this.setState({ viewList: EmployeeList.filter(emp => emp.department === myFilter) })
            // this.setState({ viewList: EmployeeList[0]});
            console.log(EmployeeList.filter(emp => emp.department === myFilter));
            console.log("sort table");
            // need to replace the "test" with an input value for the department name...
        }
        this.setState({sort: mySort});
        // this.render();
    }   //this is not causing rerender...


    componentDidMount() {
        //runs after output is rendered to DOM...
        //so put anything that needs to function each time compenent is rendered here

        console.log(EmployeeList);
    }
    componentDidUpdate() {
       //must have a condition if set state here
        console.log("update")
    }


    handleChange(event) {
        const target = event.target;
        const value = target.name === "isGoing" ? target.checked : target.value;
        //need to figure out above line https://reactjs.org/docs/forms.html
        const name = target.name;
        this.setState({
            [name]: value

        });
    }
    handleSubmit(event) {
        // not sure if these are standard or if I need to make em 
        event.preventDefault();
        //use onSubmit={this.handleSubmit}
    }

    handleTest = event => {
        console.log("temp button!");
        this.setState({filter: "Propaganda"});
        this.sortTable(event);
    }


    render() {
        return (
            <div>



                <button type="button" className="btn btn-primary"
                    data-toggle="button" aria-pressed="false"
                    onClick={this.handleTest}>
                    Single toggle - temp button
                </button>

          {/* temporary! */}



                <OptionsTab 
                // method 1: filter
                // method 2: sort
                filter={this.state.filter}
                sort={this.state.sort}
                />
                <table className="table table-dark">
                    <thead>
                        <TableHead />
                    </thead>
                    <tbody>
                        {this.state.viewList.map(employee => (
                            <TableRow
                                key={employee.id}
                                myId={employee.id}
                                firstName={employee.firstName}
                                lastName={employee.lastName}
                                department={employee.department}
                                role={employee.role}
                                salary={employee.salary}
                                rating={employee.rating}
                            />
                   


                        ))}

                    </tbody>
                    {/* <p>TestVar {this.state.testVar}</p> */}
                </table>
            </div>
        );

    }
}
export default Directory;