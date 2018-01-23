import React from 'react';

import eye from '../assets/eye.png';
import like from '../assets/like.png';

import './ProjectInfo.css';

const ProjectInfo = (props) => {
  const { project, liked } = props;
  const { views, likes } = project;

  const handleClick = (project, e) => {
    if (!liked) props.likeProject(project, e);
  }
  return (
      <div className="info">
        <img className="eye" src={eye} alt="eye"/>
        <div className="views">{views}</div>
        <img className="like" src={like} alt="like" onClick={(e) => handleClick(project, e)}/>
        <div className="likes">{likes ? likes : 0 }</div>
      </div>
    );
}

export default ProjectInfo;