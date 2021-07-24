import React, {Fragment, useEffect, useState} from 'react';
import {postComment} from '../../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setBadRequest, setReviewSendingStatus} from '../../../store/actions';
import {getIsBadRequest} from '../../../store/errors/selectors';
import {getReviewSendingStatus} from '../../../store/film/selectors';

const STARS_COUNT = 10;
const CommentLength = {
  MIN: 50,
  MAX: 400,
};

export default function ReviewForm() {
  const params = useParams();
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const isPostReviewError = useSelector(getIsBadRequest);
  const isSending = useSelector(getReviewSendingStatus);

  useEffect(() => () => dispatch(setBadRequest(false)), [dispatch, params.id]);

  function handleRatingChange(evt) {
    setRating(evt.target.value);
    if (isPostReviewError) {
      dispatch(setBadRequest(false));
    }
  }

  function handleCommentChange(evt) {
    setComment(evt.target.value);
    if (isPostReviewError) {
      dispatch(setBadRequest(false));
    }
  }

  const inputs = [...Array(STARS_COUNT)].map((_, index) => {
    const id = STARS_COUNT - index;

    return (
      <Fragment key={id}>
        <input
          id={`star-${id}}`}
          className="rating__input"
          type="radio"
          name="rating"
          value={id}
          onChange={handleRatingChange}
          disabled={isSending}
        />
        <label
          className="rating__label"
          htmlFor={`star-${id}}`}
        >Rating {index}
        </label>
      </Fragment>
    );
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(setReviewSendingStatus(true));
    dispatch(postComment(params.id, {rating, comment}));
  }

  return (
    <form
      className="add-review__form"
      onSubmit={handleSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {inputs}
        </div>
      </div>

      {isPostReviewError && <p>Oops! Something get wrong :(</p>}

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handleCommentChange}
          value={comment}
          maxLength={CommentLength.MAX}
          disabled={isSending}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={comment.length < CommentLength.MIN || !rating || isSending}
          >
            Post
          </button>
        </div>

      </div>
    </form>
  );
}
