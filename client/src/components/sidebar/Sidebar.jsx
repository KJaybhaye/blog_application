import React, { Component } from 'react';
import "./sidebar.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";



  
export default function Sidebar(){
    const [cats, setCats] = useState([]);

    useEffect(() => {
      const getCats = async () => {
        const res = await axios.get("/cats");
        setCats(res.data);
      };
      getCats();
      }, []);

    return (
      <div className='sideBar'>
        <div className='sideBarItem'>
            <div className='sideBarTitle'>ABOUT ME</div>
            <img src="https://images.pexels.com/photos/3933986/pexels-photo-3933986.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt="sidebar_image"/>
            <p>really long random intorudction helsh</p>
        </div>
        <div className='sideBarItem'>
            <div className='sideBarTitle'>CATEGORIES</div>
            <ul className='sideBarList'>
            {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
            </ul>
        </div>
        <div className='sideBarItem'>
            <div className='sideBarTitle'>FOLLOW ME</div>
            <ul className='sideBarList'>
            <i className="sideBarIcons fa-brands fa-github"></i>
            <i className="sideBarIcons fa-brands fa-linkedin"></i>
            <i className="sideBarIcons fa-brands fa-reddit"></i>
            <i className="sideBarIcons fa-brands fa-discord"></i>
            </ul>
        </div>
      </div>
    )
  }

