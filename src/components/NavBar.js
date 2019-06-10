
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {Link } from 'react-router-dom'
 class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div >
        <Navbar className="navigation bg-transparent position-absolute w-100 u-justify-content-space-between" light expand="md">
          <NavbarBrand href="/"><img src={require('../img/bg/white\ red.svg')}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="#feature">Feature</Link>
              </NavItem>
              <NavItem>
                <Link to="/pricing">Pricing</Link>
              </NavItem>
              <NavItem>
                <Link to="#team">Team</Link>
              </NavItem>
              <NavItem>
                <Link to="#faq">FAQ</Link>
              </NavItem>
              <NavItem>
                <Link to="#contact">Contact</Link>
              </NavItem>
              <NavItem>
                <Link to="/signup">Join Now</Link>
              </NavItem>
              <NavItem>
                <Link className="btn btn-success " to="/signin">Sign in</Link>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;