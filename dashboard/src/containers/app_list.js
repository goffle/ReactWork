import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { fetchApplications } from '../actions/index';

class AppList extends Component {

    constructor(props) {
        super(props);

        this.options = {
            defaultSortName: 'Status',  // default sort column name
            defaultSortOrder: 'desc'  // default sort order
        };
    }

    render() {

        return (
            <BootstrapTable data={this.props.apps} options={this.options} trClassName={trClassFormat} search={ true } multiColumnSearch={ true }>
                <TableHeaderColumn dataField="DeviceName" isKey dataAlign="center" dataSort>DeviceName</TableHeaderColumn>
                <TableHeaderColumn dataField="ApplicationVersion" dataSort>ApplicationVersion</TableHeaderColumn>
                <TableHeaderColumn dataField="Project" dataAlign="center" dataSort>Project</TableHeaderColumn>
                <TableHeaderColumn dataField="Connexion" dataAlign="center" dataSort>Connexion</TableHeaderColumn>
                <TableHeaderColumn dataField="Status" dataSort sortFunc={revertSortFunc} dataAlign="center">Status</TableHeaderColumn>
                <TableHeaderColumn dataField="UpTime" dataAlign="center" dataSort>UpTime</TableHeaderColumn>
                <TableHeaderColumn dataField="NumberOfOutage" dataAlign="center" dataSort>NumberOfOutage</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

function trClassFormat(rowData, rIndex) {

    if (rowData.Connexion === "OFF") {
        return 'mediumline';
    } else if (rowData.Status === "OFF") {
        return 'offline';
    } else {
        return 'online';
    }

}

function revertSortFunc(a, b, order) {   // order is desc or asc
    const v = {'OFF' : 1 , '??' : 2, 'ON' : 3}
    if (order === 'desc') {
        return v[a.Status] - v[b.Status];
    } else {
        return v[b.Status] - v[a.Status];
    }
}


function mapStateToProps(state) {
    return {
        apps: state.apps
    };
}

export default connect(mapStateToProps)(AppList)
