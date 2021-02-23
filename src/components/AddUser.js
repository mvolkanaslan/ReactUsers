import React, { Component } from 'react';
import UserConsumer from '../context';
var uniqid = require('uniqid');
class AddUser extends Component {
  state = {
    visibility: false,
    name: '',
    department: '',
    experience: '',
    job: '',
  };
  Toogle = () => {
    this.setState({
      visibility: !this.state.visibility,
    });
  };
  AddUser = (dispatch, e) => {
    e.preventDefault();
    const { name, department, experience, job } = this.state;
    const newUser = {
      id: uniqid(),
      name,
      department,
      experience,
      job,
    };
    dispatch({ type: 'ADD_USER', payload: newUser });
  };
  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          const { visibility, name, department, experience, job } = this.state;
          return (
            <div className="card bg-dark text-white mb-2">
              <div className="card-header d-flex justify-content-between">
                <h4>Add a New User</h4>
                <i
                  onClick={this.Toogle}
                  className={visibility ? 'fa fa-minus' : 'fa fa-sort-down'}
                  style={{
                    fontSize: '20px',
                    cursor: 'pointer',
                  }}
                ></i>
              </div>
              {visibility ? (
                <div className="card-body">
                  <form onSubmit={this.AddUser.bind(this, dispatch)}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        className="form-control mb-1"
                        placeholder="ENTER NAME"
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={this.changeInput}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="job">JOB</label>
                      <input
                        className="form-control mb-1"
                        placeholder="ENTER JOB"
                        type="text"
                        name="job"
                        id="job"
                        value={job}
                        onChange={this.changeInput}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="department">Department</label>
                      <input
                        className="form-control mb-1"
                        placeholder="ENTER DEPARTMENT"
                        type="text"
                        name="department"
                        id="department"
                        value={department}
                        onChange={this.changeInput}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="experience">Experience</label>
                      <input
                        className="form-control mb-1"
                        placeholder="ENTER EXPERIENCE"
                        type="text"
                        name="experience"
                        id="experience"
                        value={experience}
                        onChange={this.changeInput}
                      />
                    </div>
                    <input
                      type="submit"
                      className="btn btn-danger btn-block"
                      value="ADD USER"
                    />
                  </form>
                </div>
              ) : null}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
export default AddUser;
