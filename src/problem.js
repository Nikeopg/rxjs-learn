const { interval, filter, map, take, scan } = require("rxjs");

const btn = document.getElementById('interval')
const rxjsBtn = document.getElementById('rxjs')
const display = document.querySelector('#problem .result')

const people = [
  {name: 'Vladilen', age: 25},
  {name: 'Elena', age: 17},
  {name: 'Ivan', age: 18},
  {name: 'Igor', age: 14},
  {name: 'Lisa', age: 32},
  {name: 'Irina', age: 23},
  {name: 'Oleg', age: 20}
]


// btn.addEventListener('click', () => {
//     let i = 0;
//     const canDrink = [];


//     const interval = setInterval(() => {
//         btn.disabled = true;

//         if (people[i]) {
//             if (people[i].age >= 18) {
//                 canDrink.push(people[i].name);
//             }
//             display.textContent = canDrink.join(', ');
//             i++
//         } else {
//             clearInterval(interval);
//             btn.disabled = false;
//         }
    
    
    
//     }, 1000)


// })

// rxjsBtn.addEventListener('click', () => {

//     interval(1000)
//         .pipe(
//             take(people.length),
//             filter(v => people[v].age >= 18),
//             map(v => people[v].name),
//             scan((acc,v) => acc.concat(v), [])
//         )
//         .subscribe(res => {
//             display.textContent = res.join(', ');
//         })
// })