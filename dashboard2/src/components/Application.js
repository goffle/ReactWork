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
import Portfolios from '../containers/Portfolios'
import Portfolio from '../components/Portfolio'



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
                            <Route path="/" component={Portfolios} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}

export default Application