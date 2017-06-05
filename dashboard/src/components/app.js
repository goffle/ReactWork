import React, { Component } from 'react';
import AppList from '../containers/app_list'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchApplications } from '../actions/index';

class App extends Component {

  componentDidMount() {
    this.props.fetchApplications()
  }

  render() {
    return (
      <div>
        <h1 className="title">Real time Kiosk Status</h1>
        <AppList />
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchApplications }, dispatch);
}

export default connect(null,mapDispatchToProps)(App)


