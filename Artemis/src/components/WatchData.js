import React, { Component, PropTypes } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Tabs, Tab } from 'material-ui/Tabs';

import { fetchShops, fetchProducts, fetchCustomers, fetchBids } from '../actions';

//https://allenfang.github.io/react-bootstrap-table/example.html#basic

class WatchData extends Component {
    componentDidMount() {
        this.props.fetchShops();
    }

    onTabSwitch(tab) {
        switch (tab.props.label) {
            case 'Products':
                this.props.fetchProducts();
                break;
            case 'Shops':
                this.props.fetchShops();
                break;
            case 'Customers':
                this.props.fetchCustomers();
                break;
            case 'Bids':
                this.props.fetchBids();
                break;
        }

    }

    render() {
        return (
            <Tabs>
                <Tab label="Shops" onActive={this.onTabSwitch.bind(this)}>
                    {this.display(this.props.shops)}
                </Tab>

                <Tab label="Products" onActive={this.onTabSwitch.bind(this)}>
                    {this.display(this.props.products)}
                </Tab>

                <Tab label="Customers" onActive={this.onTabSwitch.bind(this)}>
                    {this.display(this.props.customers)}
                </Tab>

                <Tab label="Bids" onActive={this.onTabSwitch.bind(this)}>
                    {this.display(this.props.bids)}
                </Tab>
            </Tabs>);

    }

    display(objects) {

        if (!objects) {
            return (<h1>Loading data</h1>);
        }
        let array = Object.keys(objects).map((key) => { return objects[key]; });
        let rows = [];
        let first= true;
        if (array.length) {
            rows = Object.keys(array[0]).map((key) => {
                let row = first ? (<TableHeaderColumn key={key} dataField={key} isKey={true}>{key}</TableHeaderColumn>) : (<TableHeaderColumn key={key} dataField={key}>{key}</TableHeaderColumn>);
                first= false;
                return row;
            });
        }else{
            return <div></div>;
        }

        return (
            <div><br />
                <BootstrapTable classNames='container' data={array} options={{ noDataText: 'This is custom text for empty data' }}>
                    {rows}
                </BootstrapTable>
            </div>
        )
    }
}

function mapStateToProps({ bids, customers, products, shops }) {
    return { bids, customers, products, shops };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchShops, fetchCustomers, fetchProducts, fetchBids }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchData)
