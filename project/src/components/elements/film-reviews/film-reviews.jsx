import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/comment';
import commentProp from '../comment/comment.prop';

Reviews.propTypes = {
  comments: PropTypes.arrayOf(commentProp),
};

export default function Reviews({comments}) {
  const rowCount = Math.floor(comments.length / 2);
  const sortedComments = comments.sort((a, b) => b.rating - a.rating);

  function showCommentsColumn(columnComments) {
    return (
      <div className="film-card__reviews-col">
        {columnComments.map((comment) => <Comment key={comment.id} review={comment} />)}
      </div>
    );
  }
  return (
    <div className="film-card__reviews film-card__row">
      {showCommentsColumn(sortedComments.slice(0, rowCount))}
      {showCommentsColumn(sortedComments.slice(rowCount))}
    </div>
  );
}
