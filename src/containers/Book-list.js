/**
 * Created by ofer on 18/10/17.
 */
import React, { Component } from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

 class BookList extends  Component{

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={()=> this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}</li>
            );
        });
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps (state){
     //whatever is returned from here will show up as props inside booklist.
    return {
        books: state.books
    };
}
//anything returnd from this function will and up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called there result should be past to all our reducer.
    return bindActionCreators({selectBook: selectBook }, dispatch);
}
//Promote BookList from a component to a container - it needs to know about this dispatch method, selectBook. Make it available
//as a prop.
export default connect (mapStateToProps, mapDispatchToProps)(BookList);