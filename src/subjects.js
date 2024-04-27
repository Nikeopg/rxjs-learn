const { Subject, BehaviorSubject, ReplaySubject } = require("rxjs");

document.addEventListener('click', () => {
    const stream$ = new ReplaySubject();
    
    // stream$.subscribe(v => console.log('Value:', v));
    
    stream$.next(`First Value`);
    stream$.next(`RXJS Value`);
    stream$.next(`KEK Value`);

    stream$.subscribe(v => console.log('Value:', v));

    
});