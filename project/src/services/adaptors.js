export function adaptFilmToClient(film) {
  const adaptedEvent = Object.assign(
    {},
    film,
    {
      posterImage: film.poster_image,
      previewImage: film.preview_image,
      backgroundImage: film.background_image,
      backgroundColor: film.background_color,
      videoLink: film.video_link,
      previewVideoLink: film.preview_video_link,
      scoresCount: film.scores_count,
      runtime: film.run_time,
      isFavorite: film.is_favorite,
    },
  );

  delete adaptedEvent.poster_image;
  delete adaptedEvent.preview_image;
  delete adaptedEvent.background_image;
  delete adaptedEvent.background_color;
  delete adaptedEvent.video_link;
  delete adaptedEvent.preview_video_link;
  delete adaptedEvent.scores_count;
  delete adaptedEvent.run_time;
  delete adaptedEvent.is_favorite;

  return adaptedEvent;
}
