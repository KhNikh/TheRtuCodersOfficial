import React, { useState } from "react";
import { Redirect } from 'react-router';
import AppBaar from "./AppBar";
import Register from "./Register/Register";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import Discuss from "./Discuss/Discuss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from "./Styles";

function App() {
  const [user, setLoginUser] = useState({});
  const classes = useStyles();
  return (
    // const [logedIn, setLogedIn] = useState(false);
    <Container className={classes.container} >
      <AppBaar logedIn = {true}/>
      {/* <Discuss /> */}
      <div className={classes.main}>
        <Router>
          <Switch>
           <Redirect exact from="/" to="/homepage" />
            <Route exact path="/homepage">
              {/* {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            } */}
              <Homepage />
            </Route>
            <Route path="/login">
              <Login setLoginUser={setLoginUser} />
            </Route>
            <Route path="/discuss">
              <Discuss />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </div>
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
