import React from 'react';

function InputField({ name, type, label, value, onChange, required, pattern, columnClass }) {
  return (
    <div className={`col ${columnClass || 'col-md-6'}`}>
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className={`fa fa-${name === 'password' ? 'lock' : 'user'}`}></i>
        </span>
        <input
          type={type}
          className="form-control"
          placeholder={label}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          pattern={pattern}
        />
        <div className="invalid-feedback">Please provide a valid {label.toLowerCase()}.</div>
      </div>
    </div>
  );
}

export default InputField;
