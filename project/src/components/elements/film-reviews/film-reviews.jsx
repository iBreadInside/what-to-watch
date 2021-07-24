import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setBadRequest} from '../../../store/actions';
import {getIsBadRequest} from '../../../store/errors/selectors';
import {getReviews} from '../../../store/film/selectors';
import Comment from '../comment/comment';
import ErrorScreen from '../error-screen/error-screen';

export default function Reviews() {
  const dispatch = useDispatch();
  const comments = useSelector(getReviews);
  const isBadRequest = useSelector(getIsBadRequest);
  const rowCount = Math.ceil(comments.length / 2);

  useEffect(() => () => dispatch(setBadRequest(false)), [dispatch]);

  function showCommentsColumn(columnComments) {
    return (
      <div className="film-card__reviews-col">
        {columnComments.map((comment) => <Comment key={comment.id} review={comment} />)}
      </div>
    );
  }

  if (isBadRequest) {
    return <ErrorScreen />;
  } else {
    return (
      comments.length > 0
        ?
        <div className="film-card__reviews film-card__row">
          {showCommentsColumn(comments.slice(0, rowCount))}
          {showCommentsColumn(comments.slice(rowCount))}
        </div>
        : <p>There is no reviews yet</p>
    );
  }
}
