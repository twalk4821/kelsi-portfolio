import React from 'react';
import { withRouter } from 'react-router-dom';

import './Home.css';

import urls from '../constants/urls';

const Home = (props) => {
  window.scrollTo(0,0);
  
  const redirect = (projectId = -1) => {
    props.history.push({ pathname: '/project', query: { projectId } });
  };

  return (
    <div className="home">
    <div className="top-image"></div>
    <div className="intro"></div>
    <a className="link first" href={urls.mail}>Contact me</a>
    <div className="home-grid">
      <div className="grid-item" onClick={() => redirect(6)}>
        <div className="image image-1"></div>
        <h3 className="image-text">Wong Kai Wai Retrospective</h3>
      </div>
      <div className="grid-item" onClick={() => redirect(7)}>
        <div className="image image-7"></div>
        <h3 className="image-text">Trendline Motorsport</h3>
      </div>
      <div className="grid-item" onClick={() => redirect(1)}>
        <div className="image image-2"></div>
        <h3 className="image-text">Day at the Beach</h3>
      </div>
      <div className="grid-item" onClick={() => redirect(2)}>
        <div className="image image-3"></div>
        <h3 className="image-text">Advanced Rest</h3>
      </div>
      <div className="grid-item" onClick={() => redirect(3)}>
        <div className="image image-4"></div>
        <h3 className="image-text">Fifth Crow Farm</h3>
      </div>
      <div className="grid-item" onClick={() => redirect(4)}>
        <div className="image image-5"></div>
        <h3 className="image-text">Romantic Novel Book Cover</h3>
      </div>
      <div className="grid-item" onClick={() => redirect(5)}>
        <div className="image image-6"></div>
        <h3 className="image-text">Leaves Book Design</h3>
      </div>
      <div className="text pointer" onClick={() => props.history.push('/work')}></div>
    </div>
    </div>
  );
}

export default withRouter(Home);