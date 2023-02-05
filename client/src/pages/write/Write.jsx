import React, { Component } from 'react';
import "./write.css";

export default class Write extends Component {
  render() {
    return (
      <div className='write'>
        <img src="https://images.pexels.com/photos/7647583/pexels-photo-7647583.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" id="writeImg" />
        <form className="writeForm">
          <div className="writeForm1">
            <label htmlFor="fileInput" id="fileInputLabel"><i class="addIcon fa-solid fa-plus"></i></label>
            <input type="file" className="fileInput" style={{display:"None"}}/>
            <input type="text" className="writeInput" placeholder="Title" autoFocus="true"/>
          </div>
          <div className="writeForm1">
            <textarea className='writeInput textInput' type="text" placeholder='Write your stuff here !'></textarea>
          </div>
          <button className="publish">Publish</button>
        </form>
      </div>
    )
  }
}
