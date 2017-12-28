import React from 'react';
import './Project4.css';

/**************
Book Cover for Romantic Novels
****************/

export default (props) => (
  <div className="project-4">
      <div className="description">
      <div className="item">
        <p className="heading">Role</p>
        <p>Creative Director</p>
      </div>
      <div className="item">
        <p className="heading">Team</p>
        <p>Made at </p>
        <p>Studio Naam</p>
      </div>
      <div className="item">
        <p className="heading">Type</p>
        <p>Brand Identity</p>
        <p>Digitial Design</p>
      </div>
      <div className="item">
        <p className="heading">Year</p>
        <p>2017</p>
      </div>
      </div>
    <div className="header">
      <div className="left">Romantic Novel Book Cover</div>
      <div className="right">
        <p>BB/Architects is the studio of Dutch architect Berry Beuving. Their work is characterized by the seaming and careful merge of the designed object and its surrounding environment. </p>
        <p>We were tasked with creating a new digital experience for their portfolio and accompanying brand identity. </p>
      </div>
    </div>
    <div className="project-grid">
      <div className="item-1 content"></div>
      <div className="item-2 content"></div>
      <div className="item-3 content"></div>
    </div>
  </div>
);