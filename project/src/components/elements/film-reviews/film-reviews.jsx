import React from 'react';
import {useSelector} from 'react-redux';
import {getReviews} from '../../../store/film/selectors';
import Comment from '../comment/comment';

export default function Reviews() {
  const comments = useSelector(getReviews);
  const rowCount = Math.ceil(comments.length / 2);
  const sortedComments = comments.slice().sort((a, b) => b.rating - a.rating);

  function showCommentsColumn(columnComments) {
    return (
      <div className="film-card__reviews-col">
        {columnComments.map((comment) => <Comment key={comment.id} review={comment} />)}
      </div>
    );
  }

  return (
    comments.length > 0
      ?
      <div className="film-card__reviews film-card__row">
        {showCommentsColumn(sortedComments.slice(0, rowCount))}
        {showCommentsColumn(sortedComments.slice(rowCount))}
      </div>
      : <p>There is no reviews yet</p>
  );
}
