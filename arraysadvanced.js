//train
function main(numbers,singleNumber) {
    let currentWagon = numbers;
    let maxWagon = singleNumber;
    let firstWagon = numArray;

    for (i = 0; i < maxWagon; i++) {
        if (currentWagon <= maxWagon) {
            console.log(`firstWagon + {passengers}`);
        }
        else (currentWagon <= maxWagon) {
            console.log(`currentWagon + {passengers}`);
        }
    }
    console.log(numArray);
}

//distinct array
function main(inputArray) {
    console.log(removeDuplicates(inputArray).join(' '));
}
function removeDuplicates(inputArray) {
    var seen = {};
    return inputArray.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

//house party
function main(inputArray) {
    let guests = [];

    for (i = 0; i < inputArray.split; i++) {

        if ({name} >= guests) {
            console.log(`{name} is already in the list!`);
        }
        else ({name} != guests) {
            console.log(`{name} is not in the list`);
        }
    }
    console.log(inputArray);
}

//sorting


//sort and array by 2 criteria


//bomb numbers 
function main(array1, array2) {
    
    var specialNum = array2.shift();
    
    var power = array2.pop();
    
    for (i = 0; i < array1.length; i++) {
        
        if (array1[i] === specialNum) {
            array1.splice(i - (power), (power * 2) + 1, );
        }
    }
    sum = eval(array1.join('+'));
    console.log(specialNum);
    console.log(power);
    console.log(array1);
    console.log(sum);
}

//search for a number 
