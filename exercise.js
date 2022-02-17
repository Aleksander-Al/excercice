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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getType = function () {
        return "sedan";
    };
    return Car;
}());
var car = new Car();
console.log(car.getType());
