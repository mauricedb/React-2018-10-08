import { from, fromEvent, interval, webSocket } from "rxjs";
import {
  map,
  take,
  tap,
  flatMap,
  scan,
  filter,
  takeLast,
  switchMap,
  share
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// someNumbers
// .map(n => n ** 2)
// .forEach(n => console.log(n))

// document.getElementById("start").addEventListener("click", console.log);

// from(someNumbers)
//   .pipe(map(n => n ** 2))
//   .subscribe(n => console.log(n));

// fromEvent(document.getElementById("start"), "click")
//   .pipe(map(e => ({ x: e.clientX })))
//   .subscribe(n => console.log(n));

// const s = interval(1000)
//   .pipe(
//     tap(x => console.log(`tap: ${x}`)),
//     take(5)
//   )
//   .subscribe(
//     n => console.log(n),
//     err => console.error(err),
//     () => console.log("Completed")
//   );

// setTimeout(() => s.unsubscribe(), 10000);

// from(someNumbers)
// .filter()
// .map()

const movies$ = fromEvent(document.getElementById("start"), "click").pipe(
  switchMap(() =>
    ajax.getJSON("/movies.json").pipe(
      flatMap(m => m),
      filter(m => m.vote_average > 8.2),
      map(m => ({ id: m.id, title: m.title })),
      scan((p, c) => p.concat(c), []),
      takeLast(1),
      share()
    )
  )
);

movies$.subscribe(console.table);
movies$.subscribe(console.table);
