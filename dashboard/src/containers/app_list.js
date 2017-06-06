import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { fetchStatus } from '../actions/index';

class AppList extends Component {

    constructor(props) {
        super(props);

        this.options = {
            defaultSortName: 'Status',  // default sort column name
            defaultSortOrder: 'desc'  // default sort order
        };

        this.state = { lastUpdate: '' };
        let timer = setInterval(() => this.updateStatus(), 5000);
    }

    componentDidMount() {
        this.updateStatus();
    }

    updateStatus() {
        this.state.lastUpdate = new Date().toString();

        if (this.props.apps) {
            this.props.apps.forEach(app => {
                this.props.fetchStatus(app.DeviceId)
            });
        }
    }

    render() {
        const ar = Array.from(this.props.apps).map(([key, value]) => (value));
        return (
            <div>
                <h3> Last Update : {this.state.lastUpdate}</h3>
                <BootstrapTable data={ar} exportCSV options={this.options} trClassName={trClassFormat} search={true} multiColumnSearch={true}>
                    <TableHeaderColumn dataField="DeviceName" isKey dataAlign="center" dataSort>DeviceName</TableHeaderColumn>
                    <TableHeaderColumn dataField="ApplicationVersion" dataAlign="center" dataSort>ApplicationVersion</TableHeaderColumn>
                    <TableHeaderColumn dataField="Project" dataAlign="center" dataSort>Project</TableHeaderColumn>
                    <TableHeaderColumn dataField="Status" dataSort sortFunc={revertSortFunc} dataAlign="center">Status</TableHeaderColumn>
                    <TableHeaderColumn dataField="Connexion" dataAlign="center" dataSort>Connexion</TableHeaderColumn>
                    <TableHeaderColumn dataField="UpTime" dataAlign="center" dataSort>UpTime</TableHeaderColumn>
                    <TableHeaderColumn dataField="NumberOfOutage" dataAlign="center" dataSort>NumberOfOutage</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}




function trClassFormat(rowData, rIndex) {

    if (rowData.Connexion === "OFF") {
        return 'mediumline';
    } else if (rowData.Status === "OFF") {
        return 'offline';
    } else if (rowData.Status === "ON") {
        return 'online';
    }
    return '';
}

function revertSortFunc(a, b, order) {   // order is desc or asc
    const v = { 'OFF': 1, '??': 2, 'ON': 3 }
    if (order === 'desc') {
        return v[a.Status] - v[b.Status];
    } else {
        return v[b.Status] - v[a.Status];
    }
}


function mapStateToProps(state) {
    return {
        apps: state.applications
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchStatus }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppList)
