import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import background from "../../assets/img/background.jpg";
import useApi from "../../hooks/UseApi/useApi";
const Movie: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getMovieDetail, buildUrlImageOriginal, buildUrlImage } = useApi();

  const [movie, setmovie] = useState<TMDB.Movie | null>(null);

  useEffect(() => {
    getMovieDetail(id).then((r) => {
      setmovie(r);
      if (null !== r.backdrop_path) {
        document.body.style.backgroundImage = `url(${buildUrlImageOriginal(
          r.backdrop_path
        )})`;
      } else {
        document.body.style.backgroundImage = `url(${background})`;
      }
    });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (movie === null) {
    return <>Loading...</>;
  }

  return (
    <div id="fiche" key={movie.id}>
      <div id="fichePoster">
        <img src={buildUrlImage(movie.poster_path)} alt={movie.title} />
      </div>
      <div id="ficheInfos">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <div id="ficheDetail">
          <article>
            <h2>Date de sortie</h2>
            <time dateTime={movie.release_date}>
              {new Date(movie.release_date).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </time>
          </article>
          <article>
            <h2>Durée</h2>
            <span>{movie.runtime} min</span>
          </article>
          <article>
            <h2>Genre</h2>
            <span>{movie.genres.map((g) => g.name).join(",")}</span>
          </article>
        </div>
      </div>
    </div>
  );
};
export default Movie;
