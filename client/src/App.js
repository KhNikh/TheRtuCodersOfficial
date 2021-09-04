import React, { useState } from "react";
import { Redirect } from 'react-router';
import Navbar from "./AppBar/AppBar";
import Footer from "./Footer/Footer"
import Register from "./Register/Register";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import Discuss from "./Discuss/Discuss"
import Profile from "./Profile/Profile"
import Resources from "./Resources/Resources"
import Leaderboard from "./Leaderboard/Leaderboard"
import Roadmap from "./Roadmap/Roadmap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from "./Styles";

function App() {
  const [user, setLoginUser] = useState({});
  const [logedIn, setLogedIn] = useState(false)
  const classes = useStyles();
  return (
    // const [logedIn, setLogedIn] = useState(false);
    <Container className={classes.container} >
      
      {/* <Discuss /> */}
      <div className={classes.main}>
        <Router>
         <Navbar logedIn = {logedIn}/>
          <Switch>
           <Redirect exact from="/" to="/homepage" />
            <Route exact path="/homepage">
              {/* {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            } */}
              <Homepage />
            </Route>
            <Route path="/discuss">
              <Discuss />
            </Route>
            <Route path="/profile">
              {/* {console.log(user)} */}
              <Profile user={user}/>
            </Route>
            <Route path="/login">
              <Login setLoginUser={setLoginUser} setLogedIn={setLogedIn}/>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/roadmap">
              <Roadmap />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
