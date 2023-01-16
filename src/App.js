import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik ({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values =>{
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};
    
      if(!values.emailField) errors.emailError = 'Field required';
      if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) errors.emailError = 'Incorrect email format';
      if(!values.pswField) errors.pswError = 'Field required';
      return errors;

    }
});
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" type="text" onChange={formik.handleChange}
        value={formik.values.email}/>
        {formik.errors.emailError ? <div style={{color:'red'}}>{formik.errors.emailError}</div>: null}
        <div>Password</div>
        <input id="pswField" type="text" onChange={formik.handleChange}
        value={formik.values.password}/>
        {formik.errors.pswError ? <div style={{color:'red'}}>{formik.errors.pswError}</div>: null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
      </div>
  );
}

export default App;
