import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-datepicker/dist/react-datepicker.css'; 
import Form from './Form';
import './App.css';


function App() {
  return (
    <div className="page">
      <div className="parent">
        <div className="container">
          <div className="row mt-4 mb-4 m-auto">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
