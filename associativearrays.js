//phone book
function main(input) {
	let phonebook = {};
	for (let string of input) {
		let tokens = string.split(" ");
		let name = tokens[0];
		let number = tokens[1];
		phonebook[name] = number;
	}
	for (let key in phonebook) {
		console.log(`${key} -> ${phonebook[key]}`);
	}
}

//storage
function main(input) {
    let map = new Map();
    for (let string of input) {
        let tokens = string.split(" ");
        console.log(tokens);
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if (!map.has(product)) {
            map.set(product, quantity);
        } else {
            let currQuantity = map.get(product);
            let newQuantity = (currQuantity += quantity);
            map.set(product, newQuantity);
        }
    }
}

//school grades
function main(input) {
    let map = new Map();
    for (let string of input) {
        let tokens = string.split(" ");
        let name = tokens[0];
        let grades = tokens.splice(1, tokens.length).map(Number);
        console.log(grades);
        map.set(name, grades);
    }
    console.log(map);
    let sorted = Array.from(map).sort((a, b) => average(a, b));

    function main(a, b) {
        console.log(a[1], b);
        return a[1] - b[1];
    }
}