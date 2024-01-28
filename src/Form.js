import React, { useState } from 'react';
import InputField from './InputField';
import DatePicker from 'react-datepicker'; // Import react-datepicker
import 'react-datepicker/dist/react-datepicker.css'; // Import react-datepicker styles
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    gender: 'null',
    country: 'null',
    companyName: '',
    homeAddress: '',
    officeAddress: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const [validated, setValidated] = useState(false);
  // ... (form input change handlers, submit handler, and JSX)

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // password validity
    if (formData.password !== formData.confirmPassword){
      alert("Passwords do not match.");
      return;
    }

    if (form.checkValidity()) {
      alert('Registration successful!');
    }
    setValidated(true);
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dateOfBirth: date,
    });
  };
  
  return (
    <form
      className={`row gx-3 gy-2 custom-form ${validated ? 'was-validated' : ''}`}
      onSubmit={handleSubmit}
    >
      <h2 className="text-center">Register</h2>
      <p className="text-center text-muted lead">Create your account now!</p>

      <InputField
        name="firstName"
        type="text"
        label="First Name"
        value={formData.firstName}
        onChange={handleInputChange}
        required
        pattern="[A-Za-z]+"
        columnClass="col-md-6"
      />
      <InputField
        name="lastName"
        type="text"
        label="Last Name"
        value={formData.lastName}
        onChange={handleInputChange}
        required
        pattern="[A-Za-z]+"
        columnClass="col-md-6"
      />
      <InputField
        name="username"
        type="text"
        label="Username"
        value={formData.usern}
        onChange={handleInputChange}
        required
        pattern="[A-Za-z0-9]+"
        columnClass="col-md-6"
      />
      <InputField
        name="phoneNumber"
        type="text"
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        required
        pattern="[0-9]+"
        columnClass="col-md-6"
      />
      <InputField
        name="email"
        type="text"
        label="E-mail Address"
        value={formData.email}
        onChange={handleInputChange}
        required
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        columnClass="col-12"
      />
      {/* individual input field for Gender because of dropdown */}
      <div className="col-md-6">
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="fa fa-venus-mars"></i>
          </span>
          <select
            className="form-select"
            aria-label="Default select example"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
      </div>
      {/* end of Gender dropdown */}
      {/* DatePicker section */}
      <div className="col-md-6">
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="fa fa-calendar"></i>
          </span>
            <DatePicker
              selected={formData.dateOfBirth}
              onChange={(date) => handleDateChange(date)}
              dateFormat="MM/dd/yyyy"
              className="form-control"
              placeholderText="Date of Birth: mm/dd/yyyy"
            />
        </div>
      </div>
      {/* DatePicker end of section */}

      <InputField
        name="password"
        type="password"
        label="Password"
        value={formData.password}
        onChange={handleInputChange}
        required
        columnClass="col-md-6"
      />
      <InputField
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        required
        columnClass="col-md-6"
      />
      
      <button className="btn btn-primary btn-lg" type="submit">Register</button>
    </form>
  );
}

export default Form;
