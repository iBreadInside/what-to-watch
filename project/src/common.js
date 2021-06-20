export function getReviewRating(rating) {
  return Number.isInteger(rating)
    ? `${rating},0`
    : rating.toString().split('.').join();
}
