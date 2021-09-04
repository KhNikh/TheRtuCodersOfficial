import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

function Card(props){
    return (
        <div style={{textAlign:"center"}}>
            <div style={{backgroundColor:"black"}}>
            <img width="100%" height="200px" src={props.img} alt="Contemplative Reptile" />
            </div>
            <div>
                <h3><b><a href={props.link}>{props.head}</a></b></h3>
                <p><b>{props.desc}</b></p>
                <br />
            </div>
            
            
            
        </div>
      );
}


export default function CenteredGrid() {

  return (
    <div  style={{margin:"20px"}}>
      <Grid container spacing={6}>
        
        <Grid item xs={12} sm={6} md={4}>
          <Paper><Card head="Python" desc="Simple to use and blah blah" img="https://i.picsum.photos/id/374/200/200.jpg?hmac=ifUjaLhaxfMlsBL7zHVuQ1YgZ1ECmNDNG8v0D9uHdIc" link="" /></Paper>
        </Grid>
        <Grid item xs={12}  sm={6} md={4}>
          <Paper ><Card head="Python" desc="Simple to use and blah blah" img="https://i.picsum.photos/id/374/200/200.jpg?hmac=ifUjaLhaxfMlsBL7zHVuQ1YgZ1ECmNDNG8v0D9uHdIc" link="" /></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper><Card head="Python" desc="Simple to use and blah blah" img="https://i.picsum.photos/id/374/200/200.jpg?hmac=ifUjaLhaxfMlsBL7zHVuQ1YgZ1ECmNDNG8v0D9uHdIc" link="" /></Paper>
        </Grid>
        <Grid item xs={12}  sm={6} md={4}>
          <Paper ><Card head="Python" desc="Simple to use and blah blah" img="https://i.picsum.photos/id/374/200/200.jpg?hmac=ifUjaLhaxfMlsBL7zHVuQ1YgZ1ECmNDNG8v0D9uHdIc" link="" /></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper><Card head="Python" desc="Simple to use and blah blah" img="https://i.picsum.photos/id/374/200/200.jpg?hmac=ifUjaLhaxfMlsBL7zHVuQ1YgZ1ECmNDNG8v0D9uHdIc" link="" /></Paper>
        </Grid>
        <Grid item xs={12}  sm={6} md={4}>
          <Paper ><Card head="Python" desc="Simple to use and blah blah" img="https://i.picsum.photos/id/374/200/200.jpg?hmac=ifUjaLhaxfMlsBL7zHVuQ1YgZ1ECmNDNG8v0D9uHdIc" link="" /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
