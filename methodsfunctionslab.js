//repeat string
function main(str, n) {
    console.log(solve(str, n));
}

function solve(str, n) {
    let result = '';
    for (i = 0; i < n; i++) {
        result += str;
    }
    return result;
}

//grades
function main(grade) {
    if (grade >= 2.0 && grade <= 2.99) {
        console.log("Fail");
    } else if (grade >= 3.0 && grade <= 3.49) {
        console.log("Poor");
    } else if (grade >= 3.5 && grade <= 4.49) {
        console.log("Good");
    } else if (grade >= 4.5 && grade <= 5.49) {
        console.log("Very Good");
    } else {
        console.log("Excellent");
    }
}

//math power
function main(num, power) {
    let pow = 1;
    for (let i = 0; i < power; i++) {
        pow = pow * num;
    }
    console.log(pow);
}

//orders
function main(item, quant) {
    let totalPrice = 0;
    switch (item) {
        case 'coffee': {
            totalPrice = quant * 1.5;
            break;
        }
        case 'water': {
            totalPrice = quant * 1.00;
            break;
        }
        case 'coke': {
            totalPrice = quant * 1.40;
            break;
        }
        case 'snacks': {
            totalPrice = quant * 2.00;
            break;
        }
    }
    console.log(totalPrice.toFixed(2));
}

//simple calculator
function main(a, b, operator) {
    switch (operator) {
        case "multiply":
            let multiply = (a, b) => a * b;
            console.log(multiply(a, b));
            break;
        case "divide":
            let divide = (a, b) => a / b;
            console.log(divide(a, b));
            break;
        case "add":
            let add = (a, b) => a + b;
            console.log(add(a, b));
            break;
        case "subtract":
            let subtract = (a, b) => a - b;
            console.log(subtract(a, b));
            break;
    }
}

//wrong result
function main(n1, n2, n3) {
    console.log(solve(n1, n2, n3));
}

function solve(n1, n2, n3) {
    let result = '';
    if (n1 >= 0 && n2 >= 0 && n3 >= 0) {
        result = 'Positive';
    }
    if (n1 == 0 || n2 == 0 || n3 == 0) {
        result = 'Positive';
    }
    if (n1 < 0 && n2 < 0 && n3 > 0) {
        result = 'Positive';
    }
    if (n1 < 0 && n2 > 0 && n3 < 0) {
        result = 'Positive';
    }
    if (n1 > 0 && n2 < 0 && n3 < 0) {
        result = 'Positive';
    }
    if (n1 < 0 && n2 > 0 && n3 > 0) {
        result = 'Negative';
    }
    if (n1 > 0 && n2 < 0 && n3 > 0) {
        result = 'Negative';
    }
    if (n1 > 0 && n2 > 0 && n3 < 0) {
        result = 'Negative';
    }
    if (n1 < 0 && n2 < 0 && n3 < 0) {
        result = 'Negative';
    }
    return result;
}