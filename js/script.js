"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уе посмотрели?', '');
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('Ваша оценка фильму?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('Ваша оценка фильму?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4 == 6) {
//   console.log('ok!');
// } else {
//   console.log('error');
// }

// const num = 5;

// // (num === 50) ? console.log('ok!') : console.log('err');

// switch (num) {
//   case 49:
//     console.log('no');
//     break;
//   case 100:
//     console.log('too much');
//     break;
//   case 50:
//     console.log('yes');
//     break;
//   default:
//     console.log('not today');
//     break;
// }

// for (let i = 1; i < 5; i++) {
//   console.log(i);
// }

const numberOfFilms = +prompt('Сколько фильмов вы уе посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++){
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('Ваша оценка фильму?', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('ochen malo');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('srednenko');
} else if (personalMovieDB.count >=30) {
  console.log('zadrot');
} else {
  console.log('err');
}

console.log(personalMovieDB);
