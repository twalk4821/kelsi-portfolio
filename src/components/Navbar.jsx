import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Image } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import mail from '../assets/mail.png';
import insta from '../assets/insta.png';
import facebook from '../assets/facebook.png';

import pin from '../assets/pin.png';
import search from '../assets/search.png';

import './Navbar.css';

import urls from '../constants/urls';

class navbarInstance extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(pathname) {
    this.props.history.push(pathname);
  }

  navigate = (path) => {
    window.location = path;
  }

  render() {

    return (
      <Navbar fixedTop collapseOnSelect >
        <Navbar.Header>
          <Navbar.Brand>
            <a onClick={()=>this.redirect('/')}></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="center">
            <NavItem eventKey={1} onClick={()=>this.redirect('/work')}>Work</NavItem>
            <NavItem eventKey={2}  onClick={()=>this.redirect('/about')}>About</NavItem>
          </Nav>
          <Nav className="nav-links" pullRight>
            <NavItem eventKey={3} onClick={()=>this.navigate(urls.mail)}><Image className="nav-icon mail" src={mail} /></NavItem>
            <NavItem eventKey={4} onClick={()=>this.navigate(urls.insta)}><Image className="nav-icon insta" src={insta}  /></NavItem>
            <NavItem eventKey={5} onClick={()=>this.navigate(urls.facebook)}><Image className="nav-icon facebook" src={facebook}  /></NavItem>
            <NavItem eventKey={6} onClick={()=>this.navigate(urls.pin)}><Image className="nav-icon pin" src={pin}  /></NavItem>
            <NavItem eventKey={7} ><Image className="nav-icon search" src={search} /></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default withRouter(navbarInstance);