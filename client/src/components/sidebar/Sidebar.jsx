// import React, { Component } from 'react';
import "./sidebar.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { API_URL } from "../../App";



  
export default function Sidebar(){
    const [cats, setCats] = useState([]);

    useEffect(() => {
      const getCats = async () => {
        const res = await axios.get(`${API_URL}/cats`);
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
            <p>Hello, I am a programmer. My skills include Machine Learning and Web development.</p>
        </div>
        <div className='sideBarItem'>
            <div className='sideBarTitle'>CATEGORIES</div>
            <ul className='sideBarList'>
            {cats.map((c) => (
            <Link key={c.name} to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
            </ul>
        </div>
        <div className='sideBarItem'>
            <div className='sideBarTitle'>FOLLOW ME</div>
            <ul className='sideBarList'>
            <a href='https://www.linkedin.com/in/krushna-jaybhaye-b0170a230'><i className="sideBarIcons fa-brands fa-github"></i></a>
            <a href='https://github.com/KJaybhaye'><i className="sideBarIcons fa-brands fa-linkedin"></i></a>
            <i className="sideBarIcons fa-brands fa-reddit"></i>
            <i className="sideBarIcons fa-brands fa-discord"></i>
            </ul>
        </div>
      </div>
    )
  }

