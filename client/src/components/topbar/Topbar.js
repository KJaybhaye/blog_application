import React, { Component } from 'react';
import "./topbar.css";
import {Link} from "react-router-dom";

export default class Topbar extends Component {
  render() {
    const user = true;
    return (
        <div className='top'>
            <div className='top1'>
            <i className="topIcons fa-brands fa-github"></i>
            <i className="topIcons fa-brands fa-linkedin"></i>
            <i className="topIcons fa-brands fa-reddit"></i>
            <i className="topIcons fa-brands fa-discord"></i>
            </div>
            <div className='top2'>
                <div className='topOptions'>
                    <div className='topOption'>
                        <Link to="/" className='link'>HOME</Link>
                    </div>
                    <div className='topOption'>
                        <Link to="/write" className='link'>WRITE</Link>
                    </div>
                    <div className='topOption'>
                        <Link className='link' to="/settings">SETTINGS</Link>
                    </div>
                    <div className='topOption'>
                        <Link className='link' to={user ?"/register" :"/"}>{user && "LOGOUT"}</Link>
                    </div>
                </div>
            </div>
            <div className='top3'>
                <i className="fa-solid fa-magnifying-glass" id='topSearchIcon'></i>
                {user ? <img className="topImage" src="https://cdn.pixabay.com/photo/2015/04/25/23/32/wormhole-739872_1280.png" alt="topImgage"></img>
                : <div className='topOptions'>
                    <div className='topOptionLR' to="./login"><Link className='link' to="./login">LOGIN</Link></div>
                    <div className='topOptionLR' to="./register"><Link className='link' to="./register">REGISTER</Link></div>
                </div>
                }
                
            </div>
        </div>
    )
  }
}
