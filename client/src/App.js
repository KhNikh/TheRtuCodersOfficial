import React, { useState } from "react";
import { Redirect } from "react-router";
import Navbar from "./AppBar/AppBar";
import Footer from "./Footer/Footer";
import Register from "./Register/Register";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import Discuss from "./Discuss/Discuss";
import Profile from "./Profile/Profile";
import Resources from "./Resources/Resources";
import Leaderboard from "./Leaderboard/Leaderboard";
import Roadmap from "./Roadmap/Roadmap";
import NewPost from "./Discuss/NewPost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Typography, Grow, Grid } from "@material-ui/core";

function App() {
  const [user, setLoginUser] = useState({});
  const [logedIn, setLogedIn] = useState(false);
  return (
    // const [logedIn, setLogedIn] = useState(false);
      <Router>
      <Navbar logedIn={logedIn} />
        <div style = {{paddingBottom: '2.5rem'}}>
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
            <Profile user={user} />
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} setLogedIn={setLogedIn} />
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
          <Route path="/newpost">
            <NewPost />
          </Route>
        </Switch>
        </div>
        <Footer />
      </Router>    
  );
}

export default App;
