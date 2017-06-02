import React, { Component } from 'react';
import AppList from '../containers/app_list'


export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Real time Kiosk Status</h1>
        <AppList />
      </div>
    );
  }
}
