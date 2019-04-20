import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import AddStudent from './add_students';
import Table from './table';

// install react-router-dom
// Setup routing
// Create 2 class components
// AddStudent & Table
// Table to be displayed on the home route /
// AddStudent to be displayed on /add-student

const App = () => (
    <div className="container">
        <Route exact path="/" component={Table}/>
        <Route path="/add-student" component={AddStudent}/>
    </div>
);

export default App;
