import React from "react";
import {Typography} from "@material-ui/core";
import "./Discuss.css";
function Discuss() {
  return (
    <div className="container">
      <div className="card-Container">
          Cards here
     </div>
     <post className = "post-available">
        <div className="postHeading" id="postHeading">
          <Typography className="postHeading"
            variant="h2"> Heading</Typography>
        </div>
        <div className = "post-container">
          <div className="post">
            <h3>post1</h3>
          </div>
          <div className="post">
            <h3>post1</h3>
          </div>
        </div>
     </post>
      
    </div>
  );
}

export default Discuss;
