import React, { Component } from 'react'
import { connect } from 'react-redux';


import { fetchTweets } from '../actions/index';



class SortData extends Component {

    constructor(props) {
        super(props);
        this.state = { lastUpdate: '' };
    }

    componentDidMount() {
        this.props.fetchApplications()
    }

    render() {
        return (
            <div className="">
                SortData
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchApplications }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SortData)



