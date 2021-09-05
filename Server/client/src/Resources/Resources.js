import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function Card(props){
    return (
        <div style={{textAlign:"center"}}>
            <div style={{backgroundColor:"#C8F9C9"}}>
                <h2 style={{padding:"15px"}}>{props.head}</h2>
            </div>
            <div>
                <p><a href="{props.link1}">{props.name1}</a></p>
                <p><a href="{props.link2}">{props.name2}</a></p>
                <p><a href="{props.link3}">{props.name3}</a></p>
                <p><a href="{props.link4}">{props.name4}</a></p>
                <br />
            </div>
            
            
            
        </div>
      );
}


export default function CenteredGrid() {

  return (
    <div  style={{margin:"20px"}}>
      <Grid container spacing={6}>
        
      <Grid item xs={12} sm={6} md={3}>
          <Paper><Card head="LeaderBoard" name1="Codechef" link1="" name2="Codeforces" link2="" name3="Hackerrank" link3="" name4="GFG" link4="" /></Paper>
        </Grid>
        <Grid item xs={12}  sm={6} md={3}>
          <Paper ><Card head="Algorithms" name1="Handbook" link1="" name2="CP Algorithm" link2="" name3="CSES Problemset" link3="" name4="CF Blog" link4="" /></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper><Card head="placements" name1="InterviewBit" link1="" name2="Leetcode" link2="" name3="Binary Search" link3="" name4="Hackerrank" link4="" /></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper><Card head="Competitive"  name1="Codechef" link1="" name2="Codeforces" link2="" name3="Atcoders" link3="" name4="Hackerearth" link4="" /></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper><Card head="Coding Contests" name1="Codechef" link1="" name2="Codeforces" link2="" name3="Atcoders" link3="" name4="Hackerearth" link4="" /></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper><Card head="Development Contests" name1="Codechef" link1="" name2="Codeforces" link2="" name3="Atcoders" link3="" name4="Hackerearth" link4="" /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}  md={3}>
          <Paper><Card head="Off- Campus Placements" name1="Codechef" link1="" name2="Codeforces" link2="" name3="Atcoders" link3="" name4="Hackerearth" link4="" /></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper><Card head="Mathematics Contests" name1="Codechef" link1="" name2="Codeforces" link2="" name3="Atcoders" link3="" name4="Hackerearth" link4="" /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
