import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

// anything returndd from this function  will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
    //Whenever select book is call, result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//promot Booklist from a componen to a container - It needs to n
export default connect(mapStateToProps, mapDispatchToProps)(BookList)