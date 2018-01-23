import React, { Component } from 'react';
import like from '../assets/like.png';
import './LikeButton.css';

class LikeButton extends Component {

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
    
    this.props.updateStatusToLiked();
  }
  
  render() {
    const { liked } = this.props;
    const classes = 'like-button' + (liked ? ' liked' : '');

    if (liked) {
      return (
        <button className="like-button liked">Thank you!</button>
      );
    }

    return (
      <button className="like-button" onClick={() => this.likeProject(this.props.project)}>
          <img src={like} alt="like-button"/>
      </button>
    );
  }
}

export default LikeButton;