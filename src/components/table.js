import React, { Component } from 'react';
import axios from 'axios';
import StudentRow from './student_row';

// In Table, create a getStudents method
// Use axios to call the dummy data file.
//   - GET request to the URL "/data/student_grades.json"
// Call getStudent once the component is added to the DOM
// In the render method loop over student data to build rows

class Table extends Component {
    constructor(props){
        super(props);

        this.state = {
            studentGrades: null
        }
    }

    componentDidMount(){
        this.getStudents();
    }

    renderTable(){
        const { studentGrades } = this.state;

        if(!studentGrades){
            return <h1 className="center">Loading Student Data</h1>
        }

        if(!studentGrades.length){
            return <h1 className="center">No Student Data</h1>
        }

        const rowElements = studentGrades.map(student => {
            return <StudentRow key={student.id} {...student}/>;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {rowElements}
                </tbody>
            </table>
        )
    }

    getStudents(){
        axios.get('/data/student_grades.json').then(resp => {
            this.setState({
                studentGrades: resp.data.studentGrades
            });
        });
    }

    render() {
        return (
            <div>
                <h1 className="center">Student Grade Table</h1>

                {this.renderTable()}
            </div>
        );
    }
}

export default Table;
