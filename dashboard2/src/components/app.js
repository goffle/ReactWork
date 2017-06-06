import React, { Component } from 'react';
import PortfolioList from '../containers/portfolio_list'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class App extends Component {

  componentDidMount() {
  
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>Dashboard</h1>
          <PortfolioList />
        </div>
      </MuiThemeProvider>
    );
  }
}





