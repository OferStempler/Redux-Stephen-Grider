export default function selectBook(book) {
    //selectBook needs to return an action,
    // an object with a type property.(look at the diagram)
    return {
      type: 'BOOK_SELECTED',
      payload: book
    };
}