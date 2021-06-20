import React from 'react';
import commentProp from './comment.prop';
import dayjs from 'dayjs';

Comment.propTypes = {
  review: commentProp,
};

export default function Comment({review}) {
  const {
    comment,
    user,
    date,
    rating,
  } = review;

  const reviewRating = Number.isInteger(rating)
    ? `${rating},0`
    : rating.toString().split('.').join();
  const datetime = dayjs(date).format('YYYY-MM-DD');
  const dateText = dayjs(date).format('MMMM DD, YYYY');

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={datetime}>{dateText}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{reviewRating}</div>
    </div>
  );
}
