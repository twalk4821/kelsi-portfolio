import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ProjectInfo from '../components/ProjectInfo';
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

  likeProject = (project, e = null) => {
    if (e) {
      e.stopPropagation();
    }
    
    fetch('/projects/likes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ project }),
    })
    .then(res => res.json())
    .then(res => {
      if (res.status === 200) {
        this.getProjects();
      }
    })
  }
  
  redirect = (projectId = -1) => {
    const project = this.state.projects[projectId];
    this.props.history.push({ pathname: '/project', query: { project } });
  };

  render() {
    const { projects } = this.state;
    return (
      <div className="home">
      <div className="top-image"></div>
      <div className="intro"></div>
      <a className="link first" href={urls.mail}>Contact me</a>
      <div className="home-grid">
        <div className="grid-item" onClick={() => this.redirect(6)}>
          <div className="image image-1"></div>
          <h3 className="image-text">Wong Kai Wai Retrospective</h3>
          {projects[6] &&
            <ProjectInfo project={projects[6]} likeProject={this.likeProject} />
          }
        </div>
        <div className="grid-item" onClick={() => this.redirect(7)}>
          <div className="image image-7"></div>
          <h3 className="image-text">Trendline Motorsport</h3>
          {projects[7] &&
            <ProjectInfo project={projects[7]} likeProject={this.likeProject} />
          }
        </div>
        <div className="grid-item" onClick={() => this.redirect(1)}>
          <div className="image image-2"></div>
          <h3 className="image-text">Day at the Beach</h3>
          {projects[1] &&
            <ProjectInfo project={projects[1]} likeProject={this.likeProject} />
          }
        </div>
        <div className="grid-item" onClick={() => this.redirect(2)}>
          <div className="image image-3"></div>
          <h3 className="image-text">Advanced Rest</h3>
          {projects[2] &&
            <ProjectInfo project={projects[2]} likeProject={this.likeProject} />
          }
        </div>
        <div className="grid-item" onClick={() => this.redirect(3)}>
          <div className="image image-4"></div>
          <h3 className="image-text">Fifth Crow Farm</h3>
          {projects[3] &&
            <ProjectInfo project={projects[3]} likeProject={this.likeProject} />
          }
        </div>
        <div className="grid-item" onClick={() => this.redirect(4)}>
          <div className="image image-5"></div>
          <h3 className="image-text">Romantic Novel Book Cover</h3>
          {projects[4] &&
            <ProjectInfo project={projects[4]} likeProject={this.likeProject} />
          }
        </div>
        <div className="grid-item" onClick={() => this.redirect(5)}>
          <div className="image image-6"></div>
          <h3 className="image-text">Leaves Book Design</h3>
          {projects[5] &&
            <ProjectInfo project={projects[5]} likeProject={this.likeProject} />
          }
        </div>
        <div className="text pointer" onClick={() => this.props.history.push('/work')}></div>
      </div>
      </div>
    );
  }
}

export default withRouter(Home);