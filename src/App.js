import React, { Component } from 'react';
import Users from './components/Users';
import AddUser from './components/AddUser';
// import Test from './components/Test';
export default class App extends Component {
  render() {
    return (
      <div className="container col-lg-6 col-sm-8  mt-2">
        <AddUser />
        <Users />
      </div>
    );
  }
}
