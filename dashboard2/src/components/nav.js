import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


//https://stackoverflow.com/questions/42140318/material-ui-drawer-persistent-state

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}