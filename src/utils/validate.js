const validate = (values) => {
    const errors = {};
  
    // login form
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length < 2 || values.firstName.length > 20) {
      errors.firstName = 'First name must be between 2 and 20 characters';
    } else if (!/^[a-zA-Z ]*$/.test(values.firstName)) {
      errors.firstName = 'First name must not contain numbers.';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length < 2 || values.lastName.length > 20) {
      errors.lastName = 'Last name must be between 2 and 20 characters';
    } else if (!/^[a-zA-Z ]*$/.test(values.lastName)) {
      errors.lastName = 'Last name must not contain numbers.';
    }
  
    if (!values.password) {
      errors.password = 'Required';
    } else if (/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/.test(values.password)) {
      errors.password = 'Password must be at least 8 characters in length, in which contain at least 1 number, 1 capitalized character, and 1 symbol';
    } 
    
    return errors;
  };
  
  export default validate;