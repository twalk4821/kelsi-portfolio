import React from 'react';
import './Project10.css';

/**************
WeShare Mobile App
****************/

export default (props) => (
  <div className="project-10">

    <div className="project-grid">
      <div className="item-1 content"></div>
      <div className="item-2 content"></div>
      <div className="item-3 content"></div>
      <div className="item-4 content"></div>
      <div className="item-5 content">
        <iframe
          id="video"
          src="https://www.youtube.com/embed/jqjXpTz-GEY" 
          frameborder="0" 
          allow="autoplay; encrypted-media" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
    <div className="divider"></div>
    <div className="description">
      <p>A School Project at Academy of Art University</p>
      <p>Course—UI/UX</p>
      <p>Instructor—Bob Slote</p>
      <p>Category—Mobile Application</p>
      <p>Year— Spring 2018</p>
    </div>
  </div>
)