import { useState, useEffect } from "react";
// import Form from 'react-bootstrap/Form';
// import { Row, Col, InputGroup, Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import showPass from "../validate";
function Register({ setIsSignedIn,  setUser,setPath }) {
  const [registerName, setRegisterName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [captcha, setCaptcha] = useState("");
  function nameChange(e){
    setRegisterName(e.target.value)
  }
  console.log('regName=',registerName)
  function emailChange(e){
    setRegisterEmail(e.target.value)
  }
  function phoneChange(e){
    setPhone(e.target.value)
  }
  function passChange(e){
    setRegPassword(e.target.value)
  }
  function onChange(value) {
    console.log("Captcha value:", value);
    setCaptcha(value);
  }
  const data = {
    fullname : registerName,
    email : registerEmail,
    phone: phone,
    password : regPassword,
    "g-recaptcha-response": captcha,
  } 
 const handleRegisterSubmit = (e) =>{
  e.preventDefault();
  fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if(data.error){
        alert(data.error)
      }
      console.log('NewUser=',data.newUser)
      if (data.newUser) {
        setIsSignedIn(true);
        setUser(data.newUser);
        if (data.newUser.role === "admin") {
          setPath("/admin");
        } else {
          setPath("/dealers");
        }
      } else {
        setPath("/register");
      }
    })
    .catch((error) => console.log(error));
 }
  useEffect(() => {
    showPass();
  });
  return (
    <>
      <form
        onSubmit={handleRegisterSubmit}
        name="registration"
        id="regForm"
        className="form-control"
      >
        <h1 className="text-center">Register</h1>

        <input
          type="text"
          name="fullname"
          className="form-control"
          placeholder="Enter Your Full Name"
          required
          onChange={nameChange}
        />

        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="email@example.com"
          required
          onChange={emailChange}
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          className="form-control"
          placeholder='Phone Number'
          title="Enter your phone in pattern 9876543210"
          pattern="[0-9]{10}"
          required
          onChange={phoneChange}
        />

        <div className="pass_eye">
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            placeholder="Enter Password"
            onChange = {passChange}            
            required
          />
          <i className="far fa-eye" id="togglePassword"></i>
        </div>
        <ReCAPTCHA
          sitekey="6LcrxY4bAAAAAPDtF5FpDpxy8ULF0fYDqUgeBgwe"
          onChange={onChange}
        />
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <div className="footer">
        <p className="text-center foot">
          Already Registered?{" "}
          <b onClick={() => setPath("/signin")} className="nav-link space">
            Login Here
          </b>
        </p>
      </div>
    </>
  );
}
export default Register;
