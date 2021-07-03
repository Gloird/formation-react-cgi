import { expect } from "@jest/globals";
import DATA_GENRES from "../data/genre.json";
import DATA_FILMS from "../data/movie.json";

describe("Exercice 1", () => {
  test("Trouvé tout les films d'animation", () => {
    //Recherche le code pour le genre Animation
    const animation = DATA_GENRES.genres.find(
      (genre) => genre.name === "Animation"
    );

    //Rechercher tout les films qui contienne le genre animation {animation.code}
    const filmsAnimation = DATA_FILMS.results.filter((film) =>
      film.genre_ids.includes(animation.id)
    );

    //Résulat
    expect(filmsAnimation).toHaveLength(5);
  });

  test("Tout les noms des films trié par ordre de sortie sans les films d'animation", () => {
    //Recherche le code pour le genre Animation
    const animation = undefined;

    //Rechercher tout les films qui ne contienne pas le genre animation {animation.id}
    const films = undefined;

    // Trié sur la date ( Utilisation de Date.parse pour convertir notre date qui est en {string} en un nombre )
    const filmsTrie = films.sort(
      (filmA, filmB) =>
        Date.parse(filmA.release_date) - Date.parse(filmB.release_date)
    );

    // Récuperer les titres
    const titreFilmsTrie = filmsTrie.map((film) => film.title);

    //Résulat
    expect(titreFilmsTrie).toHaveLength(15);
    expect(titreFilmsTrie).toStrictEqual([
      "Star Wars",
      "The Star Wars Holiday Special",
      "Star Wars: Episode I - The Phantom Menace",
      "Star Wars: Episode II - Attack of the Clones",
      "The Story of Star Wars",
      "Star Wars: A Musical Journey",
      "Star Wars: Episode III - Revenge of the Sith",
      "Star Wars: The Force Awakens",
      "Star Wars: Greatest Moments",
      "Rogue One: A Star Wars Story",
      "Star Wars: The Last Jedi",
      "Solo: A Star Wars Story",
      "Star Wars: The Rise of Skywalker",
      "Battle Star Wars",
      "Star Wars Biomes",
    ]);
  });

  test("Existe il un film LEGO", () => {
    const fileLego = undefined;

    //Résulat
    expect(fileLego).toBeTruthy();
  });

  test("Trouvé tout les films sans backdrop", () => {
    const fileSansBackdrop = undefined;

    //Résulat
    expect(fileSansBackdrop).toHaveLength(3);
    expect(fileSansBackdrop.map((film) => film.backdrop_path)).toStrictEqual([
      null,
      null,
      null,
    ]);
  });
});
