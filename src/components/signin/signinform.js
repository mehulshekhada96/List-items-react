// import { useState } from "react";
// import Form from 'react-bootstrap/Form';
// import {  Col, Button } from "react-bootstrap";
// import { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import "./signin.css";
function Signin() {
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };
  //  useEffect()
  return (
    <>
      <form
        action="/login"
        method="post"
        id="comment_form"
        className="form-control"
      >
        <h1 className="text-center">Login</h1>
        <input
          className="form-control"
          type="email"
          name="email"
          id="useremail"
          placeholder="Enter User Email"
          required
        />
        <div className="pass_eye">
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
          />
          <i className="far fa-eye" id="togglePassword"></i>
        </div>
        {/* <div className="g-recaptcha" data-sitekey="6LcrxY4bAAAAAPDtF5FpDpxy8ULF0fYDqUgeBgwe"></div><br /> */}
        <ReCAPTCHA
          sitekey="6LcrxY4bAAAAAPDtF5FpDpxy8ULF0fYDqUgeBgwe"
          // onChange={onChange}
        />
        ,
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <div class="footer">
        <p class="text-center foot">
          Haven't Registered Yet?{" "}
          <a href="/register" class="nav-link">
            Register Here
          </a>
        </p>
      </div>
    </>
  );
}
export default Signin;
