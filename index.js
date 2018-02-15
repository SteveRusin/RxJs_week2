// https://jsonplaceholder.typicode.com/ 

const { fromPromise, interval, mergeDelayError, merge, timeout, empty, timeoutWithSelector } = Rx.Observable;


const reject = interval(5000).map(x => new Error('Timeout!'));
const resolve = function (id) {
    id++;
    if (id > 10) return;
    return fromPromise(fetch(`https://jsonplaceholder.typicode.com/users/${id}`))
        .timeout(200)
        .flatMap(res => res.json())
        .subscribe(
            (resolve) => {
                console.log(resolve)
            },
            null,
            () => {
                resolve(id)
            }
        );
}
resolve(0)
