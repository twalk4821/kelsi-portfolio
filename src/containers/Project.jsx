import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FacebookProvider, { Comments } from 'react-facebook';

import Project1 from './projectViews/Project1/Project1';
import Project2 from './projectViews/Project2/Project2';
import Project3 from './projectViews/Project3/Project3';
import Project4 from './projectViews/Project4/Project4';
import Project5 from './projectViews/Project5/Project5';
import Project6 from './projectViews/Project6/Project6';
import Project7 from './projectViews/Project7/Project7';
import Project8 from './projectViews/Project8/Project8';
import Project9 from './projectViews/Project9/Project9';
import LikeButton from '../components/LikeButton';
import ProjectInfo from '../components/ProjectInfo';


import './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      liked: false,
    };
  }

  componentDidMount() {
    if (!this.props.location.query) {
      this.props.history.push('/');
      return;
    }
     
    const { project } = this.props.location.query;
    fetch('/projects/views', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ project }),
    });
    this.setState({ project }); 

    window.scrollTo(0,0);
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
        this.updateStatusToLiked();
      }
    })
  }

  updateStatusToLiked = () => {
    this.setState({ liked: true });    
  }


  render() {
    const { project, liked } = this.state;
    const chooseProject = (id) => {
      console.log(id)
      switch (id) {
        case 1:
          return (<Project1 project={project} likeProject={this.likeProject} />);
        case 2:
          return (<Project2 project={project} likeProject={this.likeProject} />);
        case 3:
          return (<Project3 project={project} likeProject={this.likeProject} />);
        case 4:
          return (<Project4 project={project} likeProject={this.likeProject} />);
        case 5:
          return (<Project5 project={project} likeProject={this.likeProject} />);
        case 6:
          return (<Project6 project={project} likeProject={this.likeProject}  />);
        case 7:
          return (<Project7 project={project} likeProject={this.likeProject} />);
        case 8:
          return (<Project8 project={project} likeProject={this.likeProject} />);
        case 9:
          return (<Project9 project={project} likeProject={this.likeProject} />);
        default:
          return (<div>Error: could not find the specified project</div>);
      };
    };

    if (project) {
      const ProjectComponent = chooseProject(project.id);
      return (
        <div>
          {ProjectComponent}
          <LikeButton project={project} updateStatusToLiked={this.updateStatusToLiked} liked={liked} />
          <ProjectInfo project={project} likeProject={this.likeProject} liked={liked} />
          <FacebookProvider appId="1566443460100970">
            <Comments href="http://www.facebook.com" numPosts={5} />
          </FacebookProvider>
        </div>
      );
    }
    return null;
  }
}

export default withRouter(Project);