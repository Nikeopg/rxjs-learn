const { interval, map, filter, tap, take, takeLast, takeWhile, scan, reduce, fromEvent, switchMap } = require("rxjs");


fromEvent(document, 'click')
    .pipe(
        switchMap(e => {
            return interval(200)
                .pipe(
                    tap(v => console.log('tap', v)),
                    map(v => v + 1),
                    take(5),
                    reduce((acc, v) => acc.concat(v), [])
                );
        })
    ).subscribe({
        next: val => console.log(val),
        complete: () => console.log('Complete')
    });

// const stream$ = interval(200)
//     .pipe(
//         // tap(v => console.log('tap', v)),
//         // map(v => v * 3),
//         // filter(v => v % 2 === 0),
//         // takeLast(5),
//         // takeWhile(v => v < 7)
//         // scan((acc, v) => acc + v, 0),
//         take(5),
//         reduce((acc, v) => acc + v, 0),
//     );

// stream$.subscribe({
//     next: v => console.log(`Next ${v}`),
//     complete: () => console.log('Complete')
// });