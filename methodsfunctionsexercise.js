//smallest of three numbers
function smallInt(num1In, num2In, num3In) {
    let returnValue = Math.min(num1In, num2In, num3In);
    return returnValue;
}

function main(num1In, num2In, num3In) {
    let minIn = smallInt(num1In, num2In, num3In);
    console.log(minIn);
}

//add and subtract
function add(num1In, num2In) {
    return num1In + num2In;
}

function subtract(num1In, num2In) {
    return num1In - num2In;
}

function main(num1In, num2In, num3In) {
    let tmpSum = add(num1In, num2In);
    tmpSum = subtract(tmpSum, num3In);
    console.log(tmpSum);
}

//characters in range
function charsInRange(char1In, char2In) {
    let valueOfChar1 = char1In.charCodeAt();
    let valueOfChar2 = char2In.charCodeAt();
    let outputString = "";
    if (valueOfChar1 > valueOfChar2) {
        for (let i = valueOfChar2 + 1; i < valueOfChar1; i++) {
            outputString += `${String.fromCharCode(i)} `;
        }
    } else {
        for (let i = valueOfChar1 + 1; i < valueOfChar2; i++) {
            outputString += `${String.fromCharCode(i)} `;
        }
    }
    return outputString;
}

function main(char1In, char2In) {
    let outputString = charsInRange(char1In, char2In);
    console.log(outputString.trim());
}

//odd and even sum
function oddEvenSum(numIn) {
    let list = numIn.toString().split('');
    let oddSum = 0;
    let evenSum = 0;
    for (i = 0; i < list.length; i++) {
        let tmpNum = Number(list[i]);
        if (tmpNum % 2 == 0) {
            evenSum += tmpNum;
        } else {
            oddSum += tmpNum;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

function main(numIn) {
    let outputString = oddEvenSum(numIn);
    console.log(outputString.trim());
}

//palindrome integers
function palindrome(numIn) {
    let tmpNum = numIn.toString().split('');
    let reverseTmpNum = [...tmpNum];
    reverseTmpNum.reverse();
    for (let i = 0; i < tmpNum.length; i++) {
        if (tmpNum[i] != reverseTmpNum[i]) {
            return false;
        }
    }
    return true;
}

function main(array) {
    for (let i = 0; i < array.length; i++) {
        let returnValue = palindrome(array[i]);
        if (returnValue == true) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

//password validator
function main(password) {
    let tempArray = password.split('');
    let passOk = true;
    const regex = RegExp(/^[0-9a-zA-Z]+$/);
    let counter = 0;
    if (tempArray.length > 10 || tempArray.length < 6) {
        console.log(`Password must be between 6 and 10 characters`);
        passOk = false;
    }
    if (regex.test(password)) {} else {
        passOk = false;
        console.log(`Password must consist only of letters and digits`);
    }
    for (let i = 0; i < tempArray.length; i++) {
        if (!isNaN(tempArray[i])) {
            counter++;
        }
    }
    if (counter < 2) {
        console.log(`Password must have at least 2 digits`);
        passOk = false;
    }
    if (passOk == true) {
        console.log(`Password is valid`);
    }
}

//nxn matrix
function main(num) {
    let line = "";
    for (let i = 1; i <= num; i++) {
        line = line + `${num} `;
    }
    for (let k = 1; k <= num; k++) {
        console.log(line);
    }
}

//perfect number
function main(number) {
    var temp = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }
    if (temp === number && temp !== 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

//loading bar
function main(someNum) {
    loadingBar(someNum);
}

function loadingBar(someNum) {
    let loadingNum = someNum / 10;
    if (someNum == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else if (someNum < 100) {
        let theBar = '[';
        for (i = 0; i < Math.trunc(loadingNum); i++) {
            theBar += '%';
        }
        for (; i < 10; i++) {
            theBar += '.';
        }
        theBar += ']';
        console.log(`${loadingNum * 10}% ${theBar}`);
        console.log('Still loading...');
    }
}

//factorial division
function factorialDivision(numIn) {
    if (numIn == 0) {
        return 1;
    }
    return numIn * factorialDivision(numIn - 1);
}

function main(num1In, num2In) {
    let value1 = factorialDivision(num1In);
    console.log((value1 / num2In).toFixed(2));
}
