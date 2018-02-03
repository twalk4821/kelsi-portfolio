import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Work.css';

class Work extends Component {
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
    return (
      <div className="work">
      <div className="header">
        <div className="left"><h3>Selected Works</h3></div>
        <div className="right"><h3>A Small Selection of recently completed works</h3></div>
      </div>
      <div className="work-grid">
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
        <div className="grid-item"  onClick={() => this.redirect(4)}>
          <div className="image image-5"></div>
          <h3 className="image-text">Romantic Novel Book Cover</h3>
        </div>
        <div className="grid-item" onClick={() => this.redirect(5)}>
          <div className="image image-6"></div>
          <h3 className="image-text">Leaves Book Design</h3>
        </div>
        <div className="grid-item" onClick={() => this.redirect(9)}>
          <div className="image image-8"></div>
          <h3 className="image-text">Business Card Design</h3>
        </div>
        <div className="grid-item" onClick={() => this.redirect(8)}>
          <div className="image image-9"></div>
          <h3 className="image-text">Identity</h3>
        </div>
      </div>
      </div>
    );
  }
}

export default withRouter(Work);