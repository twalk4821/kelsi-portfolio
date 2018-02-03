import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Home.css';

import urls from '../constants/urls';

class Home extends Component {
  state = {
    projects: {},
  };

  componentDidMount() {
    window.scrollTo(0,0);
    this.getProjects();
  }

  getProjects = () => {
    fetch('/projects')
    .then(res => res.json())
    .then((res) => {
      if (res.status === 200) {
        let projectsArray = res.projects;
        let projects = {};
        for (let i = 0; i < projectsArray.length; i++) {
          const project = projectsArray[i];
          const projectId = project.id;
          projects[projectId] = project;
        }
        this.setState({ projects });
      } else {
        console.log(res);
      }
    })
    .catch(err => console.log(err));
  }
  
  redirect = (projectId = -1) => {
    const project = this.state.projects[projectId];
    this.props.history.push({ pathname: '/project', query: { project } });
  };

  render() {
    const { projects } = this.state;
    return (
      <div className="home">
        <div className="home-grid">
        <div className="grid-item" onClick={() => this.redirect(8)}>
            <div className="image image-8"></div>
            <h3 className="image-text">Identity</h3>
          </div>
          <div className="grid-item" onClick={() => this.redirect(9)}>
            <div className="image image-9"></div>
            <h3 className="image-text">Business Card Design</h3>
          </div>
          <div className="grid-item" onClick={() => this.redirect(6)}>
            <div className="image image-1"></div>
            <h3 className="image-text">Wong Kai Wai Retrospective</h3>

          </div>
          <div className="grid-item" onClick={() => this.redirect(7)}>
            <div className="image image-7"></div>
            <h3 className="image-text">Trendline Motorsport</h3>
          </div>
          <div className="grid-item" onClick={() => this.redirect(1)}>
            <div className="image image-2"></div>
            <h3 className="image-text">Day at the Beach</h3>
          </div>
          <div className="grid-item" onClick={() => this.redirect(2)}>
            <div className="image image-3"></div>
            <h3 className="image-text">Advanced Rest</h3>
          </div>
          <div className="grid-item" onClick={() => this.redirect(3)}>
            <div className="image image-4"></div>
            <h3 className="image-text">Fifth Crow Farm</h3>
          </div>
          <div className="grid-item" onClick={() => this.redirect(4)}>
            <div className="image image-5"></div>
            <h3 className="image-text">Romantic Novel Book Cover</h3>
          </div>
          <div className="grid-item" onClick={() => this.redirect(5)}>
            <div className="image image-6"></div>
            <h3 className="image-text">Leaves Book Design</h3>
          </div>
          <div className="text pointer" onClick={() => this.props.history.push('/work')}></div>
        </div>
        <div className="intro"></div>
      </div>
    );
  }
}

export default withRouter(Home);