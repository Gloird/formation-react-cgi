const useApi = () => {
  const search = (query: string) => {
    return fetch(
      `${process.env.REACT_APP_TMDB_URL}search/multi?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=fr-FR&page=1&include_adult=false&query=${query}`,
      { method: "GET" }
    )
      .then((r) => r.json())
      .then((r) => r as TMDB.SearchMulti);
  };

  const getMovieDetail = (id: string) => {
    return fetch(
      `${process.env.REACT_APP_TMDB_URL}movie/${id}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=fr-FR`,
      { method: "GET" }
    )
      .then((r) => r.json())
      .then((r) => r as TMDB.Movie);
  };

  const getTvDetail = (id: string) => {
    return fetch(
      `${process.env.REACT_APP_TMDB_URL}tv/${id}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=fr-FR`,
      { method: "GET" }
    )
      .then((r) => r.json())
      .then((r) => r as TMDB.Tv);
  };

  const buildUrlImage = (path: string) => {
    return `${process.env.REACT_APP_TMDB_URL_IMAGE_500}${path}`;
  };

  const buildUrlImageOriginal = (path: string) => {
    return `${process.env.REACT_APP_TMDB_URL_IMAGE_ORIGINAL}${path}`;
  };

  return {
    search,
    getMovieDetail,
    buildUrlImage,
    buildUrlImageOriginal,
    getTvDetail,
  };
};

export default useApi;
