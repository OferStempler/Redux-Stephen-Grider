import React, { Component } from 'react';
import BookList from '../containers/Book-list.js';
import BookDetails from '../containers/book-detail.js';

export default class App extends Component {
  render() {
    return (
        <div>
      <BookList />
          <BookDetails />
        </div>
    );
  }
}
