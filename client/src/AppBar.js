import React from "react";
import {AppBar,Typography, Grow, Grid} from "@material-ui/core";
import useStyles from "./Styles";
function AppBaar(props){
    console.log(props);
    const classes = useStyles();
    return (
        <AppBar className = {classes.appBar} position="static" color="inherit" maxWidht = "lg">
          <div className = {classes.appBarLeft}>
            <Typography className = {classes.heading} variant="h6" align="centre">
            <a className ={classes.a} href ="/Homepage" >Home</a>
            </Typography>
            <Typography className = {classes.heading} variant="h6" align="centre">
            <a className ={classes.a} href ="">Resources</a>
            </Typography>
            <Typography className = {classes.heading} variant="h6" align="centre">
            <a className ={classes.a} href ="">Roadmap</a>
            </Typography>
            <Typography className = {classes.heading} variant="h6" align="centre">
            <a className ={classes.a} href ="/Discuss">Discuss</a>
            </Typography>
            <Typography className = {classes.heading} variant="h6" align="centre">
            <a className ={classes.a} href ="">LeaderBoard</a>
            </Typography>
         </div>

         <div classname = {classes.appBarRight}>
             {props.logedIn? <Typography  className = {classes.heading} variant="h6" align="centre"> <a className ={classes.a} className = {classes.profile} href = "/login"> Profile </a></Typography> : <Typography  className = {classes.heading} variant="h6" align="centre"> <a className ={classes.a} className = {classes.profile} href = "/login"> Login/SignUp</a> </Typography> }
         </div>
        </AppBar>
    )
}

export default AppBaar;