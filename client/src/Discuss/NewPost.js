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
    const handleSubmit = () => {
        
        const post = {
            title: title,
            body:body
        }
    axios.post("/newpost", post).then((res) => {
      alert(res.data.message);
        if (res.data.message === "post submitted") {
            // setLoginUser(res.data.user);
            // setLogedIn(true);
            console.log(res.data.user);
            history.push("/discuss");
        }
    });
  };
  return (
    <form name="blog_post" className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <br />
        <div className="col-sm-10">
          <input
            type="text"
            id="blog_post_title"
            required="required"
            value={title}
            onChange={handleTitleChange}
            className="form-control"
          />
        </div>
        <br />
        <div className="form-group">
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
        <div className="form-group">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
