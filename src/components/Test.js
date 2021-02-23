import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 10,
    };
    console.log('Constroctor oluşturuldu');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('Render İşlemi..');
    return <div></div>;
  }
}
export default Test;
