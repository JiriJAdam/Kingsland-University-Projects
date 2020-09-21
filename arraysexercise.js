//add or subtract
function main(nums) {
    let newArray = [];
    let origArraySum = 0;
    let newArraySum = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            origArraySum += nums[i];
            newArray.push(nums[i] + i);
            newArraySum += nums[i] + i;
        } else {
            origArraySum += nums[i];
            newArray.push(nums[i] - i);
            newArraySum += nums[i] - i;
        }
    }
    console.log(newArray);
    console.log(origArraySum);
    console.log(newArraySum);
}

//common elements
function main(firstArr, secArr) {
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secArr.length; j++) {
            if (firstArr[i] === secArr[j]) {
                console.log(secArr[j]);
            }
        }
    }
}

//merge arrays
function main(firstArray, secondArray) {
    let thirdArray = "";
    for (i = 0; i < firstArray.length; i++) {
        if (i % 2 == 0) {
            if (i == (firstArray.length - 1)) {
                thirdArray += (Number(firstArray[i]) + Number(secondArray[i]));
            } else {
                thirdArray += (Number(firstArray[i]) + Number(secondArray[i]) + " - ");
            }
        } else {
            if (i == (firstArray.length - 1)) {
                thirdArray += (firstArray[i] + secondArray[i]);
            } else {
                thirdArray += (firstArray[i] + secondArray[i] + " - ");
            }
        }
    }
    console.log(thirdArray);
}

//array rotation
function main(array, rotations) {
    for (i = 0; i < rotations; i++) {
        array.push(array.shift());
    }
    array = array.toString();
    array = array.replace(",", " ");
    let result = array.replace(/,/g, " ");
    console.log(result);
}

//max number
function main(maxNumb) {
    let outPut = " ";
    for (let i = 0; i < maxNumb.length; i++) {
        let bigger = true;
        for (let j = i + 1; j < maxNumb.length; j++) {
            if (maxNumb[i] <= maxNumb[j]) {
                bigger = false;
                break;
            }
        }
        if (bigger) {
            outPut += `${maxNumb[i]} `;
        }
    }
    console.log(outPut.trim());
}

//equal sums
function main(list) {
    let center = 1;
    let found = false;
    let leftSide = 0;
    let rightSide = 0;
    while (center < list.length) {
        leftSide = 0;
        rightSide = 0;
        for (i = 0; i < center; i++) {
            leftSide += list[i];
        }
        for (i = center + 1; i < list.length; i++) {
            rightSide += list[i];
        }
        //TODO logic to figure out if they are the same
        if (leftSide == rightSide) {
            found = true;
            break;
        }
        center++;
    }
    if (list.length == 1) {
        console.log('0');
    } else if (found) {
        console.log(center);
    } else {
        console.log('no');
    }
}

//max sequence of equal elements
function main(arrayIn) {
    let foundItem = 0; // this holds the largest found item
    let foundCount = 0; // this holds the largest found item count;
    let currentItem = -Infinity; //This is the current Item in the array
    let currentCount = 0; //this is the count of the same item
    let found = false; //is this the same as the last one;
    for (i = 0; i < arrayIn.length; i++) {
        found = false;
        if (currentItem == arrayIn[i]) { //if the item in the array equals the one I am currently looking at
            found = true;
            currentCount++;
        }
        if (!found) { // if the item was not found it is a new item
            currentItem = arrayIn[i];
            currentCount = 1;
        } else if (currentCount > foundCount) { //  we need to keep track of the items
            foundCount = currentCount;
            foundItem = currentItem;
        }
    }
    let outputString = "";
    for (let i = 0; i < foundCount; i++) {
        outputString += `${foundItem} `;
    }
    console.log(outputString.trim());
}

//magic sum
function main(array1, sum) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = i + 1; j < array1.length; j++) {
            if (array1[i] + array1[j] == sum) {
                console.log(`${array1[i]} ${array1[j]}`);
            }
        }
    }
}
