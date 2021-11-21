"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уе посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Ваша оценка фильму?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Ваша оценка фильму?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
