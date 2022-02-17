// let movie_title: string = "Titanic 2 2022"
// let age: number = 22
// let bool: boolean = true
//
// //console.log(movie_title, age, bool)
//
// let array: number[] = [10, 20, 30]
// //let object: object = {title: "test"};
//
// type User = {
//     id: number,
//     first_name: string,
//     last_name: string,
//     is_active: boolean
// }
//
// type UserId = number;
// type UserFirstName = number;
// type UserLastName = number;
// type UserIsActive = number;
//
// let user: User = {
//     id: 1,
//     first_name: "Aleksander",
//     last_name: "Aleksiev",
//     is_active: true
// }

enum CAR_TYPE {
    SEDAN = "sedan",
    COMBI = "combi",
    HATCHBACK = "hatchback"
}

class Car {
    protected type: CAR_TYPE; // "combi", "hatchback"

    constructor() {
        this.type = CAR_TYPE.SEDAN;
    }

    setType(type: CAR_TYPE) {
        this.type = type
    }

    getType() {
        return this.type;
    }
}

// const car = new Car();
// car.setType(CAR_TYPE.HATCHBACK)
// console.log(car.getType())

enum FERRARI_COLOR {
    PINK = "pink",
    YELLOW = "yellow",
    GRAY = "gray"
}

class Ferrari extends Car {
    private color: FERRARI_COLOR;

    constructor() {
        super();
        this.color = FERRARI_COLOR.GRAY;
    }

    setColor(color: FERRARI_COLOR) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}

const ferrari = new Ferrari();
ferrari.setType(CAR_TYPE.SEDAN);
ferrari.setColor(FERRARI_COLOR.PINK)
console.log(ferrari.getType())
console.log(ferrari.getColor())