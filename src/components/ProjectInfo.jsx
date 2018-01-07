import React from 'react';

import eye from '../assets/eye.png';
import like from '../assets/like.png';

import './ProjectInfo.css';

const ProjectInfo = (props) => {
  const { views, likes } = props.project;
  return (
      <div className="info">
        <img className="eye" src={eye} alt="eye"/>
        <div className="views">{views}</div>
        <img className="like" src={like} alt="like" onClick={(e) => props.likeProject(props.project, e)}/>
        <div className="likes">{likes ? likes : 0 }</div>
      </div>
    );
}

export default ProjectInfo;