import { useState,useEffect } from "react";
// import Form from 'react-bootstrap/Form';
// import {  Col, Button } from "react-bootstrap";
// import { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import './signin.css';
import showPass from "../validate";

function Signin(props) {
  const { setIsSignedIn, setUser, setPath } = props;
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };
   useEffect(()=>{
    showPass()
   })
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  function changeEmail(e) {
    setSignInEmail(e.target.value);
  }
  function changePassword(e) {
    setSignInPassword(e.target.value);
  }
  function onChange(value) {
    console.log("Captcha value:", value);
    setCaptcha(value);
  }
  const data = {
    email: signInEmail,
    password: signInPassword,
    "g-recaptcha-response": captcha,
  };
  function onSubmitSignIn(e) {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.error){
          alert(data.error)
        }

        if (data.user) {
          setIsSignedIn(true);
          setUser(data.user);
          if (data.user.role === "admin") {
            setPath("/admin");
          } else {
            setPath("/dealers");
          }
        } else {
          setPath("/signin");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <form
        // action="/login"
        // method="post"
        onSubmit={onSubmitSignIn}
        id="comment_form"
        className="form-control"
      >
        <h1 className="text-center">Login</h1>
        <input
          className="form-control"
          onChange={changeEmail}
          type="email"
          name="email"
          id="useremail"
          placeholder="Enter User Email"
          required
        />
        <div className="pass_eye">
          <input
            type="password"
            onChange={changePassword}
            className="form-control"
            name="password"
            id="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            placeholder="Enter Password"
            required
          />
          <i className="far fa-eye" id="togglePassword"></i>
        </div>
        {/* <div className="g-recaptcha" data-sitekey="6LcrxY4bAAAAAPDtF5FpDpxy8ULF0fYDqUgeBgwe"></div><br /> */}
        <ReCAPTCHA
          sitekey="6LcrxY4bAAAAAPDtF5FpDpxy8ULF0fYDqUgeBgwe"
          onChange={onChange}
        />
        ,
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <div className="footer">
        <p className="text-center foot">
          Haven't Registered Yet?
          <b onClick={()=>setPath('/register')} className="nav-link">
            Register Here
          </b>
        </p>
      </div>
    </>
  );
}
export default Signin;
