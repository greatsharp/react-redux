// function add(x) {
//     return function(y) {
//         console.log(x);
//         return y + x;
//     };
// }

const add = x => y => y + x;

// var addTwo = add(2);
// console.log(addTwo(3));
// console.log(add(10)(11));

// function has(p) {
//     return function(o) {
//         return o.hasOwnProperty(p);
//     }
// }

const has = p => o => o.hasOwnProperty(p);

// function sortBy(p) {
//     return function(a, b) {
//         return a[p] > b[p];
//     }
// }
const sortBy = p => (a, b) => a[p] > b[p];

let result;
let users = [
  { name: 'Qian', age: 27, pets : ['Bao'], title : 'Consultant' },
  { name: 'Zeynep', age: 19, pets : ['Civelek', 'Muazzam'] },
  { name: 'Yael', age: 52, title : 'VP of Engineering'}
];
result = users.filter(has('pets')).sort(sortBy('age')).filter(has('title'));
console.log(result);

const is = p => v => has(p) && o[p] = v;

