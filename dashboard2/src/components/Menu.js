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

import { BrowserRouter as Router, Route, Link, IndexLink } from 'react-router-dom'

import css from '../../style/Menu.css'

//I need to check css good practices

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: true };
    }

    render() {
        const styles = {
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

        return (
            <header className="header">
                <Drawer containerStyle={styles.drawer}
                    overlayStyle={styles.drawer}
                    docked={true}
                    open={this.state.drawerOpen}>
                    <Subheader inset={false}><span style={{ width: '100%' }}><div style={styles.mainMenu}>PORTFOLIO 1</div><div style={{ display: 'inline-block' }}><i className="fa fa-long-arrow-left fa-lg" style={{ color: '#4498c0' }}  aria-hidden="true"></i></div></span></Subheader>
                    
                    <MenuItem leftIcon={<HomeIcon />} className={css.menuItem}><Link className="link" to="/portfolio/:id">Home</Link></MenuItem>
                    <MenuItem leftIcon={<DirectoryIcon />} className={css.menuItem}> <Link className={css.link} to="/portfolio/directory">Directory</Link></MenuItem>
                    <MenuItem leftIcon={<GraphIcon />} className={css.menuItem} > <Link className={css.link} to="/portfolio/graph">Graph</Link></MenuItem>
                    <MenuItem leftIcon={<NewsIcon />} className={css.menuItem} > <Link className={css.link} to="/portfolio/news">News</Link></MenuItem>
                    <MenuItem leftIcon={<MapIcon />} className={css.menuItem} > <Link className={css.link} to="/portfolio/map">Map</Link></MenuItem>
                    <MenuItem leftIcon={<RankIcon />} className={css.menuItem} > <Link className={css.link} to="/portfolio/ranks">Ranks</Link></MenuItem>
                    <MenuItem leftIcon={<RankIcon />} className={css.menuItem} > <Link className={css.link} to="/portfolio/sortdata">Work</Link></MenuItem>
                </Drawer>
            </header>
        )
    }
}

Menu.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default Menu

