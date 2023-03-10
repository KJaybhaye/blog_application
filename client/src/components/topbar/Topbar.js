// import React, { Component } from 'react';
import "./topbar.css";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { API_URL } from "../../App";

export default function Topbar(){
        const { user, dispatch } = useContext(Context);
        const PF = `${API_URL}/images/`;
      
        const handleLogout = () => {
          dispatch({ type: "LOGOUT" });
    };
    return (
        <div className="top">
      <div className="topLeft">
        <a href='https://www.linkedin.com/in/krushna-jaybhaye-b0170a230'><i className="topIcon fab fa-linkedin"></i></a>
        <a href='https://github.com/KJaybhaye'><i className="topIcon fab fa-github"></i></a>
        <i className="topIcon fab fa-reddit"></i>
        <i className="topIcon fab fa-discord"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          {/* <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li> */}
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
    )
  }
