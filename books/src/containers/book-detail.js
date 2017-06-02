import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book2) {
            return (
                <div>Select a Book to get Started</div>
            )
        }
        return (
            <div>
                <h3>Details for : </h3>
                <div>Title : {this.props.book2.title}</div>
                <div>Pages : {this.props.book2.pages}</div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        book2: state.activeBook
    };
}



export default connect(mapStateToProps)(BookDetail)