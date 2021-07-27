import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/UseApi/useApi";

const Tv: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getTvDetail, buildUrlImageOriginal, buildUrlImage } = useApi();

  const [tv, settv] = useState<TMDB.Tv | null>(null);

  useEffect(() => {
    getTvDetail(id).then((r) => {
      settv(r);
      document.body.style.backgroundImage = `url(${buildUrlImageOriginal(
        r.backdrop_path
      )})`;
    });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (tv === null) {
    return <>Loading...</>;
  }

  return (
    <div id="fiche" key={tv.id}>
      <div id="fichePoster">
        <img src={buildUrlImage(tv.poster_path)} alt={tv.name} />
      </div>
      <div id="ficheInfos">
        <h1>{tv.name}</h1>
        <p>{tv.overview}</p>
        <div id="ficheDetail">
          <article>
            <h2>Saisons/Episodes</h2>
            <span>
              {tv.number_of_seasons}/{tv.number_of_episodes}
            </span>
          </article>
          <article>
            <h2>Date de sortie</h2>
            <time dateTime={tv.first_air_date}>
              {new Date(tv.first_air_date).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </time>
          </article>
          <article>
            <h2>Durée</h2>
            <span>{tv.episode_run_time} min</span>
          </article>
          <article>
            <h2>Genre</h2>
            <span>{tv.genres.map((g) => g.name).join(",")}</span>
          </article>
        </div>
      </div>
    </div>
  );
};
export default Tv;
