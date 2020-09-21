//person info
let peterPan = {
    firstName: "Peter",
    lastName: "Pan",
    age: 20,
};

let maxCaulfield = {
    firstName: "Max",
    lastName: "Caulfield",
    age: "24",
};

let chloePrice = {
    firstName: "Chloe",
    lastName: "Price",
    age: "26",
};

let johnSmith = {
    firstName: "John",
    lastName: "Smith",
    age: "30",
};

function main(person) {
    for (key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

//city
let atlanta = {
    name: "Atlanta",
    area: 347,
    population: 420003,
    country: "USA",
    postCode: 30309,
};

let sydney = {
    name: "Sydney",
    area: 12368,
    population: 5312163,
    country: "Australia",
    postCode: 2000,
};

let portland = {
    name: "Portland",
    area: 375780,
    population: 653115,
    country: "USA",
    postCode: 503,
};

let manila = {
    name: "Manila",
    area: 42880,
    population: 178000,
    country: "Philippines",
    postCode: 2,
};

function main(aCity) {
    let entries = Object.entries(aCity);
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

//convert to object
let anObject = `{
    "name": "George", "age": 40, "town": "Atlanta" }`;
  
  function main(someJSON) {
      let newObject = JSON.parse(someJSON);
      for (const [key, value] of Object.entries(newObject)) {
          console.log(`${key}: ${value}`);
      }
  }

//convert to json
function main(firstName, lastName, hairColor) {
    let person = {
        firstName,
        lastName,
        hairColor,
    };
    console.log(JSON.stringify(person));
}

//cats
function main(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(`${name}, age ${age} says Meow`);
            };
        }
    }
    let cats = [];
    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(" ");
        let [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name, age));
    }
    for (cat of cats) {
        cat.meow();
    }
}

//songs




