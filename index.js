var name = "Aleksander"; // not used
// console.log(name);

let title = "Titanic";
title = "Titanic 2"
// console.log(title);

const ip_address_server_1415 = "192.168.0.1/255.255.255.0"; // x = 5;
// console.log(ip_address_server_1415);

let array = [
    title,
    ip_address_server_1415,
    true
]
//console.log(array)
//console.log(array.length)

let object = {
    title: "Borat",
    ip_address_server_1415: "191.168.0.11/255.255.255.0"
}
//console.log(object.title)

// for (let i = 0; i < array.length; i++) {
//     console.log((array[i]));
// }

// for (let element of array) {
//     console.log(element);
// }

// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }

function func() {
    console.log("Executed the function");
}
//func();

const secondFunction = () => {
    console.log("Executed the secondFunction");
}
//secondFunction();

//======UPR2======UPR2======UPR2======UPR2======UPR2======UPR2======UPR2======UPR2======UPR2======UPR2======UPR2======UPR2=======

let data = [
    10,
    7,
    25,
    10,
    10,
    56
]

const modifiedArray = data.map((element) => {
    if (element === 7) {
        element = 17
    }
    return element
})
// console.log(modifiedArray)

const filteredData = data.filter((element) => {
    if (element >= 12){
        return element
    }
})
// console.log(filteredData)

const foundElement = data.find((element) => {
    if (element === 10) {
        return element;
    }
})
// console.log(foundElement)
