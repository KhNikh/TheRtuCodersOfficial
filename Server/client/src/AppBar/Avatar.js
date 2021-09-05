import React from "react";
import "./Avatar.css"
function Avatar(props) {
  return <img className="square-img" src={props.img} alt="avatar_img" />;
}

export default Avatar;