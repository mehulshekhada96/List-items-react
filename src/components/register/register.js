// import { useState } from "react";
// import Form from 'react-bootstrap/Form';
// import { Row, Col, InputGroup, Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
function Register (){
    // const [validated, setValidated] = useState(false);

    // const handleSubmit = (event) => {
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
  
    //   setValidated(true);
    // };
  
    return (
    <>
        <form action="register" method="POST" name="registration" id='regForm' className="form-control">
        <h1 className="text-center">Register</h1>
  
      
  
        <input type="text" name="fullname" className="form-control" placeholder="Enter Your Full Name" value="Mehul" />
  
        <input type="email" name="email" id="email" className="form-control" placeholder="email@example.com" />
        <input type="tel" name="phone" id="phone" className="form-control"
          placeholder="Enter your phone in pattern 9876543210" />
  
        <div className="pass_eye">
          <input type="password" className="form-control" name="password" id="password" placeholder="Enter Password" require />
          <i className="far fa-eye" id="togglePassword"></i>
        </div>
        <ReCAPTCHA
          sitekey="6LcrxY4bAAAAAPDtF5FpDpxy8ULF0fYDqUgeBgwe"
          // onChange={onChange}
        />
        <button type="submit" className="btn btn-primary">Register</button>
  
      </form>
      <div className="footer">
        <p className="text-center foot">Already Registered? <a href="/signin" className="nav-link space">Login Here</a></p>
      </div>
      </>
    );
}
export default Register;