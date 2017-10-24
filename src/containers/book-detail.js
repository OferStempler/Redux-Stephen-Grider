/**
 * Created by ofer on 24/10/17.
 */
import React from 'react';
import { Component } from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
class BookDetails extends Component{
    render() {
        return (
            <div>Book Details!</div>
        );
    }
}

function mapStateToProps (state){
    return {
        books: state.activeBook
    };
}


export default connect (mapStateToProps, mapDispatchToProps)(BookDetails);