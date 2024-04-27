
const { of, from, scan, Observable, fromEvent, map, interval, timer, range } = require("rxjs");


// const stream$ = of(1,2,3,4,5);

// const x =stream$.subscribe(val => {
//     console.log(val);
// })


// const arr$ = from([2, 22, 33, 44, 56])
//     .pipe(
//         scan((acc, v) =>
//             acc.concat(v), []));

// arr$.subscribe(val => console.log(val));

// const stream2$ = new Observable(observer => {
//     observer.next('First Value');
//     setTimeout(() => observer.next('Second Value'), 1000);
//     setTimeout(() => observer.next('Something went wrong'), 2000);
//     setTimeout(() => observer.next('Fourth Value'), 3000);
//     setTimeout(() => {
//         observer.complete();
//     }, 4000);
// });

// stream2$.subscribe({
//     // next: (val) => console.log(`Value: ${val}`),
//     // error: (err) => console.log(err),
//     // complete: () => console.info('Complete')

//     next: (val) => console.log(`Value: ${val}`),
//     error: (err) => console.log(err),
//     complete: () => console.info('Complete')
// }
// );

// fromEvent(document.querySelector('canvas'), 'mousemove')
//     .pipe(
//         map(
//             e => ({
//                 x: e.offsetX,
//                 y: e.offsetY,
//                 ctx: e.target.getContext('2d')
//             }
//             )
//         ))
//     .subscribe(pos => {
//         pos.ctx.fillRect(pos.x, pos.y, 10, 10);
//     }
//     );

// const clear$ = fromEvent(document.getElementById('clear'), 'click');

// clear$.subscribe(() => {
//     const canvas = document.querySelesctor('canvas');
//     canvas.getContext('2d').clearRect(0,0, canvas.width, canvas.height)
// });

// const x =  interval(1000).subscribe(val => console.log(val));

// setTimeout(() => {
//     x.unsubscribe()
// } , 4000)


// timer(1000).subscribe( v => console.log(v))

range(42,10).subscribe(v => console.log(v))