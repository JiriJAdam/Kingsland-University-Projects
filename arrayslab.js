//sum first and last array elements
function main(input) {
    let first = Number(input.shift());
    let second = Number(input.pop());
    console.log(first + second);
}

//day of week
function main(dayWeek) {
    let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (dayWeek >= 1 && dayWeek <= 7) {
        console.log(day[dayWeek - 1]);
    } else {
        console.log('Invalid day!');
    }
}

//reverse an array of numbers
function main(n, inputArr) {
    let arr = [];
    for (let i = 0; i < n; i++)
        arr.push(inputArr[i]);
    let output = '';
    for (let j = arr.length - 1; j >= 0; j--)
        output += `${arr[j]} `;
    console.log(output);
}

//reverse an array of strings
function main(arr) {
    console.log(arr.reverse().join(' '));
}

//sum even numbers
function main(n) {
    let someNums = n.map((aNum) => {
        return Number(aNum);
    });
    let evenNums = someNums.filter((evenNum) => {
        if (evenNum % 2 === 0) {
            return evenNum;
        }
    });
    let total = evenNums.reduce((a, b) => a + b, 0);
    console.log(total);
}

//even and odd subtraction
function main(arr) {
    let evens = arr.filter((isEven) => {
        if (isEven % 2 === 0) {
            return isEven;
        }
    });
    let odds = arr.filter((isOdd) => {
        if (isOdd % 2 != 0) {
            return isOdd;
        }
    })
    let evenTotal = evens.reduce((a, b) => a + b, 0);
    let oddTotal = odds.reduce((a, b) => a + b, 0);
    console.log(evenTotal - oddTotal);
}

//equal arrays
function main(arr1, arr2) {
    let doMatch = true;
    let matchBreak = 0;
    let equalSums = 0;
    for (let i = 0; i < arr1.length; i++) {
        matchBreak = arr1.indexOf(arr1[i])
        if (arr1[i] !== arr2[i]) {
            doMatch = false;
            console.log(`Arrays are not identical. Found difference at ${matchBreak} index`);
        }
    }
    if (doMatch === true) {
        for (let i = 0; i < arr1.length;) {
            equalSums += Number(arr1.shift());
        }
        console.log(`Arrays are identical. Sum: ${equalSums}`);
    }
}

//condense array to number
function main(numArray) {
    if (numArray == 1) {
        console.log(numArray[0]);
    } else {
        while (numArray.length > 1) {
            let condenseArray = [];
            for (i = 0; i < numArray.length - 1; i++) {
                condenseArray[i] = numArray[i] + numArray[i + 1];
            }
            numArray = condenseArray;
        }
        console.log(numArray.toSting());
    }
}