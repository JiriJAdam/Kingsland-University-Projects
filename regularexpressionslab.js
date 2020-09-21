//match full name
function main(names) {

let myRegexPattern = /\b[A-Z][a-z]+[A-Z][a-z]+\b/g;

let validNames = []; //.push valid names into array

while ((validName = myRegexPattern.exec(names)) !== null) {
    validNames.push(validName[0]);
}

console.log(validNames.join().replace(/,/g,
" "));

}

//match phone number
function main(numbers) {

let myRegexPattern = /\+404(-|)\d{3}\1\d{4}\b/g;

let validPhoneNumbers = [];

while ((validPhoneNumber = myRegexPattern.exec(numbers)) !== null) {
    validPhoneNumbers.push(validPhoneNumber[0]);
}
console.log(validPhoneNumbers.toString().replace(/,/g,
", "));

}

//match dates 
function main(dates) {

let myRegexPattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/gm;

while ((validDate = myRegexPattern.exec(dates)) !== null) {

let day = validDate.groups['day'];

let month = validDate.groups['month'];

let year = validDate.groups['year'];

console.log(`Day:
${day}, Month:
${month}, Year:
${year}`);

}

}