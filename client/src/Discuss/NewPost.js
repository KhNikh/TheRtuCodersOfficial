import React, { Component, useState } from "react";
import "./NewPost.css";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FormGroup } from "@material-ui/core";
function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
    const handleSubmit = (e) => {
      e.preventDefault()
    console.log("submited");
    const post = {
      title: title,
      body: body,
    };
    axios.post("/newpost", post).then((res) => {
      alert(res.data.message);
      if (res.data.message === "post submitted") {
        // setLoginUser(res.data.user);
        // setLogedIn(true);
        console.log(res.data.user);
        history.push("/discuss");
      } else history.push("/newpost");
    });
  };
  return (
    <div className="container">
      <div className="title">
        <h3>Title </h3>
        <br />
        <div className="t">
          <input
            type="text"
            id="blog_post_title"
            required="required"
            value={title}
            onChange={handleTitleChange}
            className="form-control"
          />
        </div>
      </div>
      <br />
      <div className="body">
        <label>Body</label>
        <div className="col-sm-20">
          <textarea
            cols="40"
            rows="15"
            type="text"
            id="blog_post_body"
            required="required"
            value={body}
            onChange={handleBodyChange}
            className="form-control"
          />
        </div>
      </div>
      <br />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default Form;
