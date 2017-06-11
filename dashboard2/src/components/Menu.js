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
                    
                    <MenuItem leftIcon={<HomeIcon />} className={css.menuItem}><Link className={css.link} to="/portfolio/:id">Home</Link></MenuItem>
                    <MenuItem leftIcon={<DirectoryIcon />} className={css.menuItem}> <Link className={css.link} to="/portfolio/directory">Directory</Link></MenuItem>
                    <MenuItem leftIcon={<GraphIcon />} className={css.menuItem} > <Link className={css.link} to="/portfolio/graph">Graph</Link></MenuItem>
                    <MenuItem leftIcon={<NewsIcon />} className={css.menuItem} > <Link className={css.link} to="/portfolio/news">News</Link></MenuItem>
                    <MenuItem leftIcon={<MapIcon />} className={css.menuItem} > <Link className={css.link} to="/portfolio/map">Map</Link></MenuItem>
                    <MenuItem leftIcon={<RankIcon />} className={css.menuItem} > <Link className={css.link} to="/portfolio/ranks">Ranks</Link></MenuItem>
                </Drawer>
            </header>
        )
    }
}

Menu.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default Menu


/*           <Drawer containerStyle={styles.drawer}
                    overlayStyle={styles.drawer}
                    docked={false}
                    open={this.state.drawerOpen}
                    onRequestChange={(open) => this.setState({open})}>
                <Subheader inset={false}><span style={{width:'100%'}}><div style={styles.mainMenu}>MAIN MENU</div><div style={{display:'inline-block'}}><i className="fa fa-long-arrow-left fa-lg" style={{color: '#4498c0'}} onTouchTap={this.handleClose.bind(this)} aria-hidden="true"></i></div></span></Subheader>
                <MenuItem className={css.menuItem} onTouchTap={this.handleClose.bind(this)}><IndexLink className={css.link} activeClassName={css.active} onlyActiveOnIndex={true} to="/exports"><i className="fa fa-book" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;DataPack Library</IndexLink></MenuItem>
                <MenuItem className={css.menuItem} onTouchTap={this.handleClose.bind(this)}><Link className={css.link} activeClassName={css.active} to="/create" ><i className="fa fa-plus-square" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Create Datapack</Link></MenuItem>
                <MenuItem className={css.menuItem} onTouchTap={this.handleClose.bind(this)}><Link className={css.link} activeClassName={css.active} to="/about" ><i className="fa fa-info-circle" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;About EventKit</Link></MenuItem>
                <MenuItem className={css.menuItem} onTouchTap={this.handleClose.bind(this)}><Link className={css.link} activeClassName={css.active} to="/account" ><i className="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Account Settings</Link></MenuItem>
                <MenuItem className={css.menuItem} onTouchTap={this.handleClose.bind(this)}><Link className={css.link} activeClassName={css.active} to="/logout" ><i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Log Out</Link></MenuItem>
            </Drawer>

            */