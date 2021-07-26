import React from "react";

import { Container } from "react-bootstrap";
// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/Navbar/Navbar";
import Signin from "./components/signin/signinform";
import Register from "./components/register/register";
import Admin from './components/admin/admin';
import Dealers from "./components/dealer/dealers";
import ErrorBoundry from "./components/ErrorBoundary";
// import ErrorContainer from "./components/error/error";
const App = () => {
  return (
      <Container >
      <Navbar />
      {/* <ErrorContainer error='Hello' errorType='Success' /> */}
      <Route path='/signin'>
        <Signin />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/admin'>
        <ErrorBoundry>
        <Admin  />
        </ErrorBoundry>
      </Route>    
      <Route path='/dealers'>
        <ErrorBoundry>
        <Dealers  />
        </ErrorBoundry>
      </Route>   
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
