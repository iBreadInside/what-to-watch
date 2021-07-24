import React from 'react';
import commentProp from './comment.prop';
import dayjs from 'dayjs';
import {getReviewRating} from '../../../common';

export default function Comment({review}) {
  const {
    comment,
    user,
    date,
    rating,
  } = review;

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

      <div className="review__rating">{getReviewRating(rating)}</div>
    </div>
  );
}

Comment.propTypes = {
  review: commentProp,
};
