import { Typography } from "@material-ui/core";
import React from "react";
import Corousal from "./Corousal/Corousal";
import "./homepage.css";
import discordLogo from "../asset/discord_logo.jpg"
const Homepage = () => {
  return (
    <div className="homepage">
      <Corousal />
      <div className="homepageContent">
        <div className="aboutUsHeading">
          <Typography
            className="aboutUs"
            variant="h2"
            align="centre"
          >
            About Us
          </Typography>
        </div>
        <div className="content">
          <div className="content-left">
            <p>
              The RTU Coders is Coding Community of University Department,
              Rajasthan Technical University Kota. Who by passion and by choice
              learn, share, grow, and code together to build an environment of
              coding enthusiasts in campus.
              <br />
              The RTU Coders was initiated by <b>Abhishek Kumar</b> of
              Information Technology Branch (2017-21 Batch) on this beautiful
              Palindromic date <b>02-02-2020</b>
            </p>
            <h3 className = "heading">Mission</h3>  
            <p>
              {" "}
              Create an impact by building a strong programming community from
              problem solvers to problem setters and get placed in multinational
              companies. Crack Google Competitions, Facebook Hackercup, ICPC
              etc.{" "}
            </p>
            <h3 className = "heading">Vision</h3>
            
            <p>
              Our vision is to make learning competitive programming accessible
              for students of RTU.
            </p>
          </div>
          <div class="content-right">
              <a href="https://discord.com/invite/KP8yFKctdP">
                <img className = "discord-img"
                  src={discordLogo}
                  alt=""
                />
              </a>
          </div>
        </div>
      </div>

      {/* <h1>Hello Homepage</h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div> */}
    </div>
  );
};

export default Homepage;
