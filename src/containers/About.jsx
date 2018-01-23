import React from 'react';
import { withRouter } from 'react-router-dom';
import './About.css';

const About = (props) => {
  window.scrollTo(0,0);
  
  const redirect = (projectId) => {
    props.history.push({ pathname: '/project', query: { projectId } });
  };

  return (
    <div className="about">
      <div className="picture"></div>
      <div className="about-header"></div>
      <div className="header"></div>
    </div>
  );
};

export default withRouter(About);