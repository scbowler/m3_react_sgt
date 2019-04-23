import React, { Component } from 'react';
import Input from './input';

class AddStudent extends Component {
    state = {
        name: '',
        course: '',
        grade: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleAddStudent = event => {
        event.preventDefault();

        console.log('New Student:', this.state); 

        this.props.add({...this.state});

        this.props.history.push('/');
    }

    render() {
        const { course, grade, name } = this.state;

        return (
            <div>
                <h1 className="center">Add Student</h1>

                <form onSubmit={this.handleAddStudent}>
                    <div className="row">
                        <Input label="Student Name" name="name" onChange={this.handleInputChange} value={name} />
                    </div>
                    
                    <div className="row">
                        <Input label="Student Course" name="course" onChange={this.handleInputChange} value={course}/>
                    </div>
                    
                    <div className="row">
                        <Input label="Student Grade" name="grade" onChange={this.handleInputChange} value={grade}/>
                    </div>
                    
                    <div className="right-align">
                        <button className="btn blue">Add Student</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddStudent;
