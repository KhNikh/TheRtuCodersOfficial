// import React, { useState } from 'react';
// import {
// Nav,
// NavLink,
// Bars,
// NavMenu,
// NavBtn,
// NavBtnLink,
// } from './NavbarElements';
// import Avatar from './Avatar'
// import imgurl from '../asset/logo_dark.jpg'
// import { Typography } from '@material-ui/core';
// const Navbar = (props) => {
// 	const [logedin, setLogedIn] = useState(props.logedIn);
// return (
// 	<box >
// 	<Nav>
// 		<Bars />

//       <NavMenu>
//         <Avatar  img={imgurl}/>
// 		<NavLink to='/homepage' activeStyle>
// 		<Typography variant='h6'><strong>Home</strong></Typography>
// 		</NavLink>
// 		<NavLink to='/resources' activeStyle>
// 		<Typography variant='h6'><strong>Resources</strong></Typography>
// 		</NavLink>
// 		<NavLink to='/roadmap' activeStyle>
// 		<Typography variant='h6'><strong>Roadmap</strong></Typography>
// 		</NavLink>
// 		<NavLink to='/discuss' activeStyle>
//     <Typography variant='h6'><strong>Discuss</strong></Typography>
// 		</NavLink>
// 		<NavLink to='/leaderboard' activeStyle>
//     <Typography variant='h6'><strong>Leaderboard</strong></Typography>
// 		</NavLink>
// 		{/* Second Nav */}
// 		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
// 		</NavMenu>
// 		<NavBtn>
// 		{!props.logedIn?<NavBtnLink to='/login'><Typography variant='h6'><strong>Login</strong></Typography></NavBtnLink>:<NavBtnLink to='/profile'><Typography variant='h6'><strong>Profile</strong></Typography></NavBtnLink>}
// 		</NavBtn>
// 	</Nav>
// 	</box>
// );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import "./AppBar.css";
import { CSSTransition } from "react-transition-group";
import img from "../asset/logo_dark.jpg";
import { Button } from "@material-ui/core";
import { NavBtnLink } from "./NavbarElements";
import { Typography } from "@material-ui/core";
import { NavBtn } from "./NavbarElements";
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';

export default function Header(props) {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [logedin, setLogedIn] = useState(props.logedIn);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={img} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/homepage">Home</a>
          <a href="/resources">Resources</a>
          <a href="/roadmap">Roadmap</a>
          <a href="/discuss">Discuss</a>
          <a href="/leaderboard">Leaderboard</a>
				  <NavBtn>
					  {!props.logedIn ? <NavBtnLink to='/login'><Typography variant='h6'><strong>Login</strong></Typography></NavBtnLink> : <NavBtnLink to='/profile'><Typography variant='h6'><strong>Profile</strong></Typography></NavBtnLink>}
	              </NavBtn>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <ReorderIcon fontSize= "large"/>
      </button>
    </header>
  );
}
