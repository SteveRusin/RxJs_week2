// https://jsonplaceholder.typicode.com/ 

const { fromPromise, of, forkJoin } = Rx.Observable;

const numberArr = [];

for (let i = 1; i <= 10; i++) {
    numberArr.push(i);
}


const sub = Rx.Observable.forkJoin(
    numberArr
        .map(num => fromPromise(fetch(`https://jsonplaceholder.typicode.com/users/${num}`))),
    (...users) => users.map(x => x.json())
).flatMap(x => x)


sub.flatMap(x => x).subscribe(x => console.log(x))
