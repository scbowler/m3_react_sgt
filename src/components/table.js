import React, { Component } from 'react';
import StudentRow from './student_row';

class Table extends Component {

    renderTable(){
        const { studentGrades } = this.props;

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
