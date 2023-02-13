// import React, { Component } from 'react';
import "./singlePost.css";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from "../../App";

export default function SinglePost(){
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = `${API_URL}/images/`;
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);


  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${API_URL}/posts/` + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${API_URL}/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

    return (
      <div className="singlePost">
      <div className="postWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlepostTitle">
            {title}
            {post.username === user?.username && (
              <div className="postEdit">
                <i
                  className="postIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="postIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="postInfo">
          <span className="postAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="postBodyInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="postBody">{desc}</p>
        )}
        {updateMode && (
          <button className="postButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
    )
}
