/**
 * Created by ofer on 24/10/17.
 */
import React from 'react';
import { Component } from 'react';
import {connect} from "react-redux";
class BookDetails extends Component{
    render() {
        if(!this.props.book){
            return <div>Select a book to get Started</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>

            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        book: state.activeBook
    };
}


export default connect (mapStateToProps)(BookDetails);