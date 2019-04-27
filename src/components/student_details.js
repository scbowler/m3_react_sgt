import React, { Component } from 'react';
import NavLink from './nav_link';
import axios from 'axios';

class StudentDetails extends Component {
    state = {
        details: {}
    }

    async componentDidMount(){
        console.log('Details Props:', this.props.match.params.id);

        const { id } = this.props.match.params;

        const resp = await axios.get('/data/student_details.json');

        let studentDetails = resp.data[id];

        if(!studentDetails){
            studentDetails = false;
        }

        this.setState({
            details: studentDetails
        });
    }

    render(){
        console.log('Details:', this.state.details);

        const { classData, student, studentGrade } = this.state.details;

        // if(!student){
        //     return <h1 className="center">Loading Data</h1>;
        // }

        return (
            <div>
                <h1 className="center">Student Details</h1>
                <NavLink color="blue darken-2" text="Home" to="/" />
                <h2 className="center">{student?.fullName}</h2>
            </div>
        );
    }
}

export default StudentDetails;
