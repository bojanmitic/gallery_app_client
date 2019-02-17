import React from 'react';

const FormField = ({
  input,
  type,
  label,
  meta: { error, touched, active },
}) => {
  return (
    <div>
      <label htmlFor={input.name}>
        {label}
      </label>
      <input {...input} type={type} name={input.name} id={input.name} />
      <div className="red-text">{touched && error}</div>
    </div>
  );
};

FormField.defaultProps = {
  meta: {
    touched: false,
    error: '',
    active: false,
  },
};
export default FormField;
