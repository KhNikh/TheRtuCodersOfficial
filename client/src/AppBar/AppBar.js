import React, { useState } from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import Avatar from './Avatar'
import imgurl from '../asset/logo_dark.jpg'
import { Typography } from '@material-ui/core';
const Navbar = (props) => {
	const [logedin, setLogedIn] = useState(props.logedIn);
return (
	<box >
	<Nav>
		<Bars />

      <NavMenu>
        <Avatar  img={imgurl}/>
		<NavLink to='/homepage' activeStyle>
		<Typography variant='h6'><strong>Home</strong></Typography>	
		</NavLink>
		<NavLink to='/resources' activeStyle>
		<Typography variant='h6'><strong>Resources</strong></Typography>	
		</NavLink>
		<NavLink to='/roadmap' activeStyle>
		<Typography variant='h6'><strong>Roadmap</strong></Typography>
		</NavLink>
		<NavLink to='/discuss' activeStyle>
    <Typography variant='h6'><strong>Discuss</strong></Typography>
		</NavLink>
		<NavLink to='/leaderboard' activeStyle>
    <Typography variant='h6'><strong>Leaderboard</strong></Typography>
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		{!props.logedIn?<NavBtnLink to='/login'><Typography variant='h6'><strong>Login</strong></Typography></NavBtnLink>:<NavBtnLink to='/profile'><Typography variant='h6'><strong>Profile</strong></Typography></NavBtnLink>}
		</NavBtn>
	</Nav>
	</box>
);
};

export default Navbar;
