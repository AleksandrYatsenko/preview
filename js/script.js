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

// personalMovieDB.genres[i-1] = prompt(`Your favorite genre number ${i}?`, '');
//   }
//   return personalMovieDB;
// }
//writeYourGenres();
//showMyDB();

// const calc = (a, b) => { a + b; };

// CALLBACK-functions

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done(){
//   console.log('Я прошел этот урок!');
// }

// learnJS ('JavaScript', done);

// learnJS ('JavaScript', function (){
//   console.log('Я прошел этот урок!');
// });

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function (){
//     console.log('test');
//   }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

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

// const str = prompt('', '');
// const products = str.split(', ');
// console.log(products.join('; '));

//let arr = [2, 3, 4, 5, 6, 7, 8, 9];
//massive.splice(2, 3, '60', '70', '80');
//arr.slice(1, 4);
// console.log(arr.reverse());
//console.log(arr.concat(50, 60));

// const numbers = {
//   a: 2,
//   b: 4,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const add = {
//   d: 17,
//   e: 20
// };

// //console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'swsw';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wp', 'lj', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'fb'];
// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);

// const arrey = ['a', 'b'];
// const newAr = [...arrey];
// console.log(newAr);

// const q = {
//   one: 1,
//   two: 2
// };
// const newQ = {...q};
// newQ.one = 20;
// console.log(newQ);

// tasks (les27)
// let x = 5;
// console.log(x++); // 5 - сначала возвращает, а потом увиличивает на 1
// console.log(++x); // 6

// console.log([] + false - null + true);  // NaN ([] - приводится к пустой строке)

// let y = 1;
// let x = y = 2;
// console.log(x); // 2

// console.log([] +1 + 2);  // 12 ([] - преобразовуется в пустую строку и потом все приводится к строке)

// console.log('1'[0]); // 1 (покажет первый символ строки как объекта)

// console.log(2 && 1 && null && 0 && undefined); // null
// // && - запинается на ЛЖИ и возвращает её

// let a,
//     b;
// console.log(!!(a && b) == (a && b)); // false (первое вернет - boolean, а второе - значение)

// console.log(null || 2 && 3 || 4); // 3
// // (сначала выполнится && вернет 3 (последнее true), а потом || и вернет оба раза 3, как первое true)

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b); // false (не равны, это разные хранилища инфы)

// console.log(+'Infinity'); // Infinity (приводит к числу)

// console.log('Ёжик' > 'яблоко'); // false (я выше чем Ё в таблице символов unicode)

// console.log(0 || "" || 2 || undefined || true || false); // 2 ('это первое true)

// lesson  029
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px'; // добавили сразу несколько свойств
btns[1].style.borderRadius = '50%';
circles[0].style.backgroundColor = 'black';
// for (let i = 0; i < hearts.length; i++) {            // для нескольких элементов сразу 1й вариант
//   hearts[i].style.backgroundColor = 'yellow';
// }
hearts.forEach(item => {                           // для нескольких элементов сразу 2й вариант
  item.style.backgroundColor = 'brown';
});

const div = document.createElement('div'); // создаем элемент div
const text = document.createTextNode('тут пишем текст который нужно добавить');
div.classList.add('black');     // добавим элементу класс .black
//document.body.append(div);     // вставит div в конец документа, перед закрывающим /body
document.querySelector('.wrapper').append(div); // вставит div в конец блока wrapper
//wrapper.prepend(div); //вставит вначале
//hearts[0].before(div);  // вставит перед 1-м элементом
//hearts[0].after(div);   // вставит после 1-го элемента
//circles[0].remove();    // удалит 1-й элемент
hearts[0].replaceWith(circles[0]);  //заменит 1-й hearts(удалит) на 1-й circles (вставит)но и заберет circles[0] со старого места
//div.innerHTML = 'hello world';   //вставит текст в div
//div.innerHTML = '<h1>Hello!</h1>';  // вставит заголовок
div.textContent = 'helloooo';    // вставит текст, работает только с текстом
//div.insertAdjacentHTML('beforebegin', '<h2>world</h2>');  // вставит заголовок Н2 перед элементом
//div.insertAdjacentHTML('afterbegin', '<h2>world</h2>');  // вставит заголовок Н2 в начало элемента
//div.insertAdjacentHTML('beforeend', '<h2>world</h2>');  // вставит заголовок в конец элемента
div.insertAdjacentHTML('afterend', '<h2>world</h2>');  // вставит заголовок Н2 после элемента











// ---------------------------------------------------------
// program about films DB

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов Вы пересмотрели?', '');
    while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов Вы пересмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Какой последний просмотренный фильм?', '');
      const b = prompt('Как оцените его?', '');
      if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  toggleVisible: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++){
      let genre = prompt(`Какой любимый жанр под номером ${i}`);
      if (genre == '' || genre == null) {
        console.log('не корректный ввод');
        i--;
      } else {
        personalMovieDB.genres[i-1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр номер ${i+1} - это ${item}`);
    });
  }
};
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGenres();

// -------------------------------------------------------------


