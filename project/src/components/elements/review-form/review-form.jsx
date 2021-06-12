import React, {Fragment, useState} from 'react';

const STARS_COUNT = 10;

export default function ReviewForm() {
  const [, setRating] = useState('');
  const [comment, setComment] = useState('');

  const ratingChangeHandler = (evt) => {
    setRating(evt.target.value);
  };

  const commentChangeHandler = (evt) => {
    setComment(evt.target.value);
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
  };

  return (
    <form className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {inputs}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={commentChangeHandler}
          value={comment}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}
