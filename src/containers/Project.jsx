import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Project1 from './projectViews/Project1/Project1';
import Project2 from './projectViews/Project2/Project2';
import Project3 from './projectViews/Project3/Project3';
import Project4 from './projectViews/Project4/Project4';
import Project5 from './projectViews/Project5/Project5';
import Project6 from './projectViews/Project6/Project6';
import Project7 from './projectViews/Project7/Project7';
import Project8 from './projectViews/Project8/Project8';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
    }
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

  render() {
    const { project } = this.state;
    const chooseProject = (id) => {
      switch (id) {
        case 1:
          return (<Project1 project={project} />);
        case 2:
          return (<Project2 project={project} />);
        case 3:
          return (<Project3 project={project} />);
        case 4:
          return (<Project4 project={project} />);
        case 5:
          return (<Project5 project={project} />);
        case 6:
          return (<Project6 project={project} />);
        case 7:
          return (<Project7 project={project} />);
        case 8:
          return (<Project8 project={project} />);
        default:
          return (<div>Error: could not find the specified project</div>);
      };
    };

    if (project) {
      const projectComponent = chooseProject(project.id);
      return projectComponent;
    }
    return null;
  }
}

export default withRouter(Project);