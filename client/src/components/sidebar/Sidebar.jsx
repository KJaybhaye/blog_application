import React, { Component } from 'react';
import "./sidebar.css";

export default class Sidebar extends Component {
  render() {
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
                <li>One</li>
                <li>One</li>
                <li>One</li>
                <li>One</li>
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
}
