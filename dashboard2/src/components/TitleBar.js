import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Subheader from 'material-ui/Subheader'
import MenuItem from 'material-ui/MenuItem'

import HomeIcon from 'material-ui/svg-icons/action/home';
import MapIcon from 'material-ui/svg-icons/action/room';
import DirectoryIcon from 'material-ui/svg-icons/action/view-module';
import NewsIcon from 'material-ui/svg-icons/action/description';
import GraphIcon from 'material-ui/svg-icons/action/timeline';
import RankIcon from 'material-ui/svg-icons/action/toc';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import css from '../../style/TitleBar.css'

class TitleBar extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: true };
    }

    render() {


        const styles = {
            appBar: {
                backgroundColor: 'black',
                height: '70px',
                top: '0px'
            },
            img: {
                position: 'absolute',
                left: '50%',
                marginLeft: '-127px',
                marginTop: '10px',
                height: '50px'
            },
            drawer: {
                width: '200px',
                marginTop: '70px',
                backgroundColor: '#010101',
                marginLeft: '0px',
                padding: '0px'
            },
            mainMenu: {
                color: '#3e3f3f',
                display: 'inline-block',
                marginRight: '40px',
                fontSize: '20px',
                align: 'left',
            },
        };

        const img = <img style={styles.img} src='https://unsplash.it/50/50' />
        return (
            <header className="header">
                <AppBar style={styles.appBar} title={img}  />
                <Drawer containerStyle={styles.drawer}
                    overlayStyle={styles.drawer}
                    docked={true}
                    open={this.state.drawerOpen}>
                    <Subheader inset={false}><span style={{ width: '100%' }}><div style={styles.mainMenu}>PORTFOLIO 1</div><div style={{ display: 'inline-block' }}><i className="fa fa-long-arrow-left fa-lg" style={{ color: '#4498c0' }}  aria-hidden="true"></i></div></span></Subheader>
                    <MenuItem leftIcon={<HomeIcon />} className={css.menuItem} >Home</MenuItem>
                    <MenuItem leftIcon={<DirectoryIcon />} className={css.menuItem} >Directory</MenuItem>
                    <MenuItem leftIcon={<GraphIcon />} className={css.menuItem} >Graph</MenuItem>
                    <MenuItem leftIcon={<NewsIcon />} className={css.menuItem} >News</MenuItem>
                    <MenuItem leftIcon={<MapIcon />} className={css.menuItem} >Map</MenuItem>
                    <MenuItem leftIcon={<RankIcon />} className={css.menuItem} >Ranks</MenuItem>
                </Drawer>
            </header>
        )
    }
}

TitleBar.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default TitleBar
