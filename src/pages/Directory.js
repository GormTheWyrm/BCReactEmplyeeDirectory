import React from "react";
import OptionsTab from "../components/OptionsTab";
import "../App.css";
import TableHead from "../components/TableHead"
import TableRow from "../components/TableRow"
// consider renaming DirectoryTable?
import EmployeeList from "../utils/EmployeeList.json"

class Directory extends React.Component {
    state = {
        filter: "all",  //ideally I shoudl add some code to change things into lowercase
        sort: "default",
        viewList: EmployeeList
        //this should initialize view list to the json data
    };

    //need to pass methods down to components and bring back effects from event to this compoenent

    // setfilter
    //setSort

    setFilter = (event) => {
        console.log("setFilter function");
        let myFilter = event.target.value;
        console.log(myFilter);
        this.setState({filter: myFilter});
        //need to make it rerender now!



    }

    setSort = (event) => {
        console.log("setSort function");
        let mySort;



    }













    filterTable() {
        let myFilter = "Propaganda";   //change this to this.state.filter after testing!
        //need to change this to in input or dropdown!
        if (this.state.filter === "all") {
            //set viewList to EmployeeList
            this.setState({ viewList: EmployeeList })
        } else {
            //set view list to a filtered array
            //will need to change this so that it displays different options
            this.setState({ viewList: EmployeeList.filter(emp => emp.department === myFilter) })
            console.log(EmployeeList.filter(emp => emp.department === myFilter));
            console.log("sort table");
            // need to replace the "test" with an input value for the department name...
        }

    }   //havign issues because its async...

    sortTable() {


        let mySort = "first name";

        this.setState({ sort: mySort });
        // this.render();
    }   //this is not causing rerender...


    componentDidMount() {
        //runs after output is rendered to DOM...
        //so put anything that needs to function each time compenent is rendered here
        console.log("mount: Employee List");
        console.log(EmployeeList);
    }
    componentDidUpdate() {
        //must have a condition if set state here
        console.log("component did update")
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
        // this.setState({ filter: "Propaganda" });
        // this.filterTable(event);
        this.setFilter(event);
        console.log(event.target.value);
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
                    setFilter={this.setFilter}
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