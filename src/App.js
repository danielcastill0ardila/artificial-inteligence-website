import React, { Component } from "react";
import logo from "./logo.svg";
import UserTable from "./components/Users";
import { getUsers } from "./api/users";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "./store/users/actions";
import { Navbar,DropdownButton,NavItem,Nav,NavDropdown,MenuItem} from 'react-bootstrap';

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserTable users={users} />
      </div>
    );
  }
}

export const mapStateToProps = ({
  entities: {
    users: { entities }
  }
}) => {
  return {
    users: entities
  };
};
export default connect(
  mapStateToProps,
  {
    fetchUsers: actions.fetchUser
  }
)(App);
