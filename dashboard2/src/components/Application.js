import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import styles from '../../style/Application.css'

import injectTapEventPlugin from 'react-tap-event-plugin'

//UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



import TitleBar from './TitleBar'

injectTapEventPlugin();

import PortfolioList from '../containers/portfolio_list'
import CompanyList from '../containers/company_list'



//https://stackoverflow.com/questions/42140318/material-ui-drawer-persistent-state


class Application extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div className='root'>
                    <TitleBar />
                    <div className='content'>
                        <CompanyList />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}
/*
Application.propTypes = {
    //children: PropTypes.object.isRequired,
    bbox: React.PropTypes.arrayOf(React.PropTypes.number),
};
*/

export default Application