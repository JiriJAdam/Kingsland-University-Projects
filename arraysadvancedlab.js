//sum first last
function main(someArr) {
    let first = Number(someArr[0]);
    let second = Number(someArr[someArr.length - 1]);
    console.log(first + second);
}

//negative positive numbers
function main(someArr) {
    let sortedArray = [];
    for (i = 0; i < someArr.length; i++) {
        if (someArr[i] < 0) {
            sortedArray.unshift(someArr[i]);
        } else if (someArr[i] >= 0) {
            sortedArray.push(someArr[i]);
        } else {
            alert("Not a valid number");
        }
    }
    for (j = 0; j < sortedArray.length; j++) {
        console.log(sortedArray[j]);
    }
}

//first and last k numbers
function main(someArr) {
    let k = someArr.shift();
    console.log(someArr.slice(0, k).join(" "));
    console.log(someArr.slice(someArr.length - k, someArr.length).join(" "));
}

//last k numbers sequence
function main(n, k) {
    let seq = [1];
    for (let currentArr = 1; currentArr < n; currentArr++) {
        let start = Math.max(0, currentArr - k);
        let end = currentArr;
        let sum = addIndexes(seq.slice(start, end));
        seq[currentArr] = sum;
    }
    console.log(seq.join(' '));
}
function addIndexes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//process odd numbers
function main(theArr) {
    let result = theArr
        .filter((num, i) => i % 2 == 1)
        .map(x => 2 * x)
        .reverse();
    console.log(result.join(' '));
}

//smallest two numbers
function main(arr) {
    let newArr = arr;
    arr.sort((a, b) => a - b);
    let secondSmallNum = arr[1];
    console.log(`${arr[0]} ${secondSmallNum}`);
}

//list of products
function main(theArr) {
    let i = 1;
    theArr.sort()
        .map((x) => {
            console.log(`${i}.${x}`);
            i++;
        });
}


// array manipulations 
function main (commands) {
    let arr = add;
        .shift()
        .split(' ')
        .map(Number);
    
    let arr2 = remove;
        .shift()
        .split(' ')
        .map(Number);
    
    let arr3 = RemoveAt;
        .shift()
        .split(' ')
        .map(Number);
    
    let arr4 = Insert;
        .shift()
        .split(' ')
        .map(Number);
    
    const {arr, arr2,  arr3, arr4};
    [arr, arr2, arr3, arr4, commands] = [4, 19, 2, 53, 6, 43];

    console.log(commands);
}

