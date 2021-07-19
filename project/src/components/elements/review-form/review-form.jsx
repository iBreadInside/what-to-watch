import React, {Fragment, useEffect, useState} from 'react';
import {postComment} from '../../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setBadRequest} from '../../../store/actions';
import {getIsBadRequest} from '../../../store/errors/selectors';

const STARS_COUNT = 10;
const CommentLength = {
  MIN: 50,
  MAX: 400,
};

export default function ReviewForm() {
  const params = useParams();
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');
  const [isSending, setIsSending] = useState(false);
  const dispatch = useDispatch();
  const isPostReviewError = useSelector(getIsBadRequest);

  useEffect(() => () => dispatch(setBadRequest(false)), [dispatch, params.id]);

  const ratingChangeHandler = (evt) => {
    setRating(evt.target.value);
    if (isPostReviewError) {
      dispatch(setBadRequest(false));
    }
  };

  const commentChangeHandler = (evt) => {
    setComment(evt.target.value);
    if (isPostReviewError) {
      dispatch(setBadRequest(false));
    }
  };

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
          onChange={ratingChangeHandler}
        />
        <label
          className="rating__label"
          htmlFor={`star-${id}}`}
        >Rating {index}
        </label>
      </Fragment>
    );
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSending(true);
    dispatch(postComment(params.id, {rating, comment}));
    setIsSending(false);
  };

  return (
    <form
      className="add-review__form"
      onSubmit={handleSubmit}
      disabled={isSending}
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
          onChange={commentChangeHandler}
          value={comment}
          maxLength={CommentLength.MAX}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={comment.length < CommentLength.MIN || !rating}
          >
            Post
          </button>
        </div>

      </div>
    </form>
  );
}
