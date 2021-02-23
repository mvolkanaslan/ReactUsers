import React, { Component } from 'react';
const UserContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: 'Mehmet Volkan ASLAN',
        job: 'Mechanical Engineer',
        department: 'Production Maneger',
        experience: '2 Years',
      },
      {
        id: 2,
        name: 'Yasin DEMİR',
        job: 'Design Engineer',
        department: 'Research and Development',
        experience: '3 Years',
      },
      {
        id: 3,
        name: 'Esra CANTÜRK',
        job: 'Sales - Marketing Specialist',
        department: 'Sales - Marketing',
        experience: '5 Years',
      },
      {
        id: 4,
        name: 'Mutlu YEŞİLTEPE',
        job: 'Financial advisor',
        department: 'Finance Department',
        experience: '6 Years',
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
//diğer komponentlerde buradaki state verisini UserConsumer üzerinden alacak. Yani artık kullanıcı olacak.
const UserConsumer = UserContext.Consumer;
export default UserConsumer;
