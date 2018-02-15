// https://jsonplaceholder.typicode.com/ 

const { of } = Rx.Observable;


class Subject extends Rx.Observable {
    constructor() {
        super();
        this.observes = [];
    }

    subscribe(observer) {
        this.observes.push(observer)
    }

    next(value) {
        this.observes.forEach(observer => observer.next(value));
    }

    error(error) {
        this.observes.forEach(observer => observer.error(error));
    }

    complete() {
        this.observes.forEach(observer => observer.complete());
    }
}

const subject = new Subject();

subject.map(x => x).subscribe(x => console.log(x))

subject.next('25')
subject.next('15')
subject.next(of([15,16]))
