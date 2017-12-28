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
      projectId: null,
    }
  }

  componentDidMount() {
    if (!this.props.location.query) {
      this.props.history.push('/');
      return;
    }
     
    const { projectId } = this.props.location.query;
    this.setState({ projectId }); 

    window.scrollTo(0,0);
  }

  render() {
    const { projectId } = this.state;
    const chooseProject = (id) => {
      switch (id) {
        case 1:
          return (<Project1 />);
        case 2:
          return (<Project2 />);
        case 3:
          return (<Project3 />);
        case 4:
          return (<Project4 />);
        case 5:
          return (<Project5 />);
        case 6:
          return (<Project6 />);
        case 7:
          return (<Project7 />);
        case 8:
          return (<Project8 />);
        default:
          return (<div>Error: could not find the specified project</div>);
      };
    };
    const project = chooseProject(projectId);
    return project;
  }
}

export default withRouter(Project);