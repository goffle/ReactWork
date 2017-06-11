import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import styles from '../../style/Application.css'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();
//UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import AppBar from './AppBar'
import PortfolioList from '../containers/Portfolio-list'
import Portfolio from '../components/Portfolio'
import NewPortfolio from '../components/NewPortfolio'


//https://stackoverflow.com/questions/42140318/material-ui-drawer-persistent-state


class Application extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <BrowserRouter>
                    <div className='root'>
                        <AppBar />
                        <Switch>
                            <Route path="/portfolio" component={Portfolio} />
                            <Route path="/newportfolio" component={NewPortfolio} />
                            <Route path="/" component={PortfolioList} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}

export default Application