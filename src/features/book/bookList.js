import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookData } from './apiSlice';

const BookList = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  //console.log(books.book);
  useEffect(() => {
    dispatch(fetchBookData());
  }, []);
  //console.log(books.book[0])
  return (
    <div>
      <h2>List of books</h2>
      {books.map((book) => (
        <li key={book._id}>
          {' '}
          name of book is {book.title} and author {book.Author}
        </li>
      ))}
    </div>
  );
};
export default BookList;
