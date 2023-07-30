import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../counter/counterSlice';
import book from '../pictures/book_img.jpg';
import './books.scss';

const Books = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <img className='book_img' src={book} alt="book_image" />

      <div className="count_div">
        <h2>Buy {count} books</h2>
        <button onClick={handleIncrement} >+</button>
        <button onClick={handleDecrement} >-</button> 
      </div>

    </>
  );
};

export default Books;
