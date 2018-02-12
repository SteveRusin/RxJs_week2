// https://jsonplaceholder.typicode.com/ 

const { fromPromise } = Rx.Observable;

function fetchInSerie(id) {
    id++;
    if (id > 10) return;
    return fromPromise(fetch(`https://jsonplaceholder.typicode.com/users/${id}`))
        .flatMap(res => res.json())
        .subscribe(
        (resolve) => {
            console.log(resolve)
        },
        null,
        () => {
            fetchInSerie(id)
        }
        );
}

fetchInSerie(0)