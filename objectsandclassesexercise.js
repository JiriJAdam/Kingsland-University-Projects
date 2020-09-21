// employees
function main(someArr) {
    class Employee {
        constructor(name, empNum) {
            this.name = name;
            this.empNum = empNum;
        }
    }
    for (item of someArr) {
        let empName = item;
        let empNum = item.length;
        let someEmp = new Employee(empName, empNum);
        console.log(`Name: ${someEmp.name} -- Personal Number: ${someEmp.empNum}`);
    }
}

//towns
function main(input) {
    let newArr = []
    for (let i = 0; i < input.length; i++) {
        let values = input[i].split('|')
        var town = (values[0])
        var lat = Number(values[1]).toFixed(2)
        var long = Number(values[2]).toFixed(2)
        let obj = {
            town: town,
            latitude: lat,
            longitude: long
        }
        newArr.push(obj)
    }
    for (object of newArr)
        console.log(object)
}

//store provision 
class Product {
    constructor(name, quantity) {
        this.Name = name;
        this.Quantity = Number(quantity);
    }
}

function GetProductList(listIn) {
    let tmpOutput = []
    for (let i = 0; i < listIn.length; i = i + 2) {
        let item = new Product(listIn[i], listIn[i + 1]);
        tmpOutput.push(item);
    }
    return tmpOutput;
}

function AddorderList(tmpArray, listIn) {
    for (let i = 0; i < listIn.length; i = i + 2) {
        let tmpItem = tmpArray.find(x => x.Name == listIn[i]);
        if (tmpItem != undefined) {
            let tmpIndex = tmpArray.indexOf(tmpItem);
            tmpItem.Quantity += Number(listIn[i + 1]);
            tmpArray[tmpIndex] = tmpItem;
        } else {
            let item = new Product(listIn[i], listin[i + 1]);
            tmpArray.push(item);
        }
    }
    return tmpArray;
}

function main(listIn, list2In) {
    let outputArray = GetProductList(listIn);
    for (let item of outputArray) {
        console.log(`${item.Name} -> ${item.Quantity}`)
    }
}


//movies


//inventory
function main(input) {
    let myHeros = [];
    for (hero of input) {
        let newHero = hero.split(' / ');
        let newHeroObj = {
            name: newHero[0],
            level: Number(newHero[1]),
            items: newHero[2].split(', '),
        };
        myHeros.push(newHeroObj);
    }
    myHeros.sort(function(a, b) {
        return a - b
    });
    for (hero of myHeros) {
        console.log(`
        Hero: ${hero.name}
        level => ${hero.level}
        Items => ${hero.items.join(', ')}`);
    }
}

//make a dictionary
function main(input) {
    let newDictionary = {};
    for (let word of input) {
        let thing = JSON.parse(word);
        let entries = Object.entries(thing);
        for (let [key, value] of entries) {
            newDictionary += (`\nTerm: ${key} => Definition: ${value}`);
        }
    }
    console.log(newDictionary);
}

//class vehicle
class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
                engine: parts.engine;
                power: parts.power;
                quality: parts.engine * parts.power;
            },
            function main() {
                this.fuel = fuel;
                this.drive = function(fuelLoss) {
                    return (this.fuel - fuelLoss);
                }
            }
    }
}