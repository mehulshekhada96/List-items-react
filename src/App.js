import React, { useState } from "react";

import { Container } from "react-bootstrap";
// We use Route in order to define the different routes of our application
// import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/Navbar/Navbar";
import Signin from "./components/signin/signinform";
import Register from "./components/register/register";
import Admin from "./components/admin/admin";
import Dealers from "./components/dealer/dealers";
import ErrorBoundry from "./components/ErrorBoundary";
// import ErrorContainer from "./components/error/error";
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState("");
  const [path, setPath] = useState("/signin");
  console.log(isSignedIn);
  return (
    <Container>
      <Navbar user={user} path={path} setPath={setPath} />
      {/* <ErrorContainer error='Hello' errorType='Success' /> */}
      {path === "/signin" ? (
        <Signin
          isSignedIn={isSignedIn}
          setIsSignedIn={setIsSignedIn}
          setUser={setUser}
          setPath={setPath}
        />
      ) : path === "/register" ? (
        <Register
          isSignedIn={isSignedIn}
          setIsSignedIn={setIsSignedIn}
          setUser={setUser}
          setPath={setPath}
        />
      ) : path === "/admin" ? (
        <ErrorBoundry>
          <Admin setPath={setPath} />
        </ErrorBoundry>
      ) : path === "/dealers" ? (
        <ErrorBoundry>
          <Dealers setPath={setPath} />
        </ErrorBoundry>
      ) : null}

      {/* <Route exact path="/">
        <RecordList />
      </Route> */}
      {/* <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create /> */}
      {/* </Route> */}
    </Container>
  );
};

export default App;
