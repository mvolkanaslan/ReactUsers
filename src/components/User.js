import React, { Component } from 'react';
import UserConsumer from '../context';

class User extends Component {
  state = {
    isVisible: false,
  };
  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  UserDelete = (dispatch, e) => {
    const { id } = this.props;
    dispatch({ type: 'DELETE_USER', payload: id });
  };

  render() {
    const { id, name, job, department, experience } = this.props;
    const { isVisible } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div
              className={
                isVisible ? 'card mb-2 bg-success text-white' : 'card mb-2'
              }
            >
              <div className="card-header d-flex justify-content-between">
                <h3 onClick={this.onClickEvent} style={{ cursor: 'pointer' }}>
                  {name}
                </h3>
                <i
                  className="fa fa-trash"
                  style={{ cursor: 'pointer' }}
                  onClick={this.UserDelete.bind(this, dispatch)}
                ></i>
              </div>
              {isVisible ? (
                <div className="card-body">
                  <p>Job : {job}</p>
                  <p>Department : {department}</p>
                  <p>Experience : {experience}</p>
                </div>
              ) : null}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default User;
