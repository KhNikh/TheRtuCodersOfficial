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
                <p><a href={props.link1}>{props.name1}</a></p>
                <p><a href={props.link2}>{props.name2}</a></p>
                <p><a href={props.link3}>{props.name3}</a></p>
                <p><a href={props.link4}>{props.name4}</a></p>
                <br />
            </div>
            
            
            
        </div>
      );
}


export default function CenteredGrid() {

  return (
    <div  style={{paddingLeft:'30px'}}>
      <Grid container spacing={5} style={{width: '100%'}}>
        
      <Grid item xs={12} sm={12} md={4}>
          <Paper><Card head="LeaderBoard" name1="Codechef" link1="https://www.codechef.com/ratings/all?filterBy=Country%3DIndia%3BInstitution%3DRajasthan%20Technical%20University%2C%20Kota&order=asc&sortBy=global_rank" name2="Codeforces" link2="https://codeforces.com/ratings/organization/20614" name3="Hackerrank" link3="https://www.hackerrank.com/leaderboard?filter=Rajasthan+Technical+University%2C+Kota&filter_on=school&page=1&track=cpp&type=practice" name4="GFG" link4="https://auth.geeksforgeeks.org/college/rajasthan-technical-university-rtu-kota" /></Paper>
        </Grid>
        <Grid item xs={12}  sm={12} md={4}>
          <Paper ><Card head="Algorithms" name1="Handbook" link1="https://cses.fi/book/book.pdf" name2="CP Algorithm" link2="https://cp-algorithms.com/" name3="CSES Problemset" link3="https://cses.fi/problemset/" name4="CF Blog" link4="https://codeforces.com/group/t7UKRkTXSU/blog" /></Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper><Card head="placements" name1="InterviewBit" link1="https://www.interviewbit.com/practice/" name2="Leetcode" link2="https://leetcode.com/" name3="Binary Search" link3="https://binarysearch.com/" name4="Hackerrank" link4="https://www.hackerrank.com/dashboard" /></Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper><Card head="Competitive"  name1="Codechef" link1="https://www.codechef.com" name2="Codeforces" link2="https://codeforces.com" name3="Atcoders" link3="https://atcoder.jp" name4="Hackerearth" link4="https://www.hackerearth.com" /></Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper><Card head="Coding Contests" name1="ICPC" link1="https://icpc.global/" name2="Google Competitions" link2="https://codingcompetitions.withgoogle.com/" name3="Facebook Hackercup" link3="https://www.facebook.com/codingcompetitions/hacker-cup/" name4="TCS Codevita" link4="https://www.tcscodevita.com/" /></Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper><Card head="Development Contests" name1="GSOC" link1="https://summerofcode.withgoogle.com/" name2="Microsoft Imagine" link2="https://imaginecup.microsoft.com/en-us" name3="MLH" link3="https://mlh.io/" name4="Smart India Hackathon" link4="https://www.sih.gov.in/" /></Paper>
        </Grid>
        <Grid item xs={12} sm={12}  md={4}>
          <Paper><Card head="Off- Campus Placements" name1="E-litmus" link1="https://www.elitmus.com/" name2="Cocubes" link2="https://www.cocubes.com/" name3="Amcat" link3="https://www.myamcat.com/" name4="TCS NQT" link4="https://learning.tcsionhub.in/hub/national-qualifier-test/" /></Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4 }>
          <Paper><Card head="Mathematics Contests" name1="Project Euler" link1="https://projecteuler.net/" name2="OEIS" link2="https://oeis.org/" name3="Number World" link3="http://www.numberworlds.com/" name4="Art of Problem Solving" link4="https://artofproblemsolving.com/" /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}