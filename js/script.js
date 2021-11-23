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

//const numberOfFilms = +prompt('Сколько фильмов вы уе посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// for (let i = 0; i < 2; i++){
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('Ваша оценка фильму?', '');
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log('ochen malo');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log('srednenko');
// } else if (personalMovieDB.count >=30) {
//   console.log('zadrot');
// } else {
//   console.log('err');
// }

// console.log(personalMovieDB);

// function showMyDB () {
//   if (!personalMovieDB.privat) {
//     console.log(personalMovieDB);
//   } else {
//     console.log('sorry its private');
//   }
// }


// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     const c = prompt(`Your favorite genre number ${i}?`, '');
//     personalMovieDB.genres[i-1] = c;

//     //personalMovieDB.genres[i-1] = prompt(`Your favorite genre number ${i}?`, '');
//   }
//   return personalMovieDB;
// }
//writeYourGenres();
//showMyDB();

// const calc = (a, b) => { a + b; };

// CALLBACK-functions

function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}

function done(){
  console.log('Я прошел этот урок!');
}

learnJS ('JavaScript', done);

// learnJS ('JavaScript', function (){
//   console.log('Я прошел этот урок!');
// });

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function (){
    console.log('test');
  }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

//console.log(Object.keys(options).length);

//console.log (options['colors']['border']);

//console.log(options.name);

//delete options.name;

//console.log(options);

// for (let key in options) {
//   console.log(`Property ${key} has ${options[key]}`);
// }

// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Property ${i} has value ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Property ${key} has value ${options[key]}`);
//   }
// }



