//biscuits factory
function main(amountOfBiscuits, workers, biscuitsProduced) {

let everyThirdDay = Math.floor(amountOfBiscuits * 0.75 * workers);

let totThirdDay = (everyThirdDay * 10);

let totalBiscuits = Math.floor((amountOfBiscuits * 20 * workers) + totThirdDay);

let percentage = ((totalBiscuits - biscuitsProduced) / biscuitsProduced * 100).toFixed(2);

if (everyThirdDay < 1) { everyThirdDay = 0;
}

console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);

if (totalBiscuits > biscuitsProduced) {

console.log(`You produce ${percentage} percent more biscuits.`);

} else {

percentage = ((biscuitsProduced - totalBiscuits) / biscuitsProduced * 100).toFixed(2);

console.log(`You produce ${percentage} percent less biscuits.`);

}

}


//weaponsmith
function main(commandsArray) {

var particles = commandsArray.shift();
//shifting first element of array which is our weapon name

var mainArr = [];

var commands = [];

commands = commandsArray;

//console.log(commands);

mainArr = particles.split('|');
// turn that first element into it's own array

var lengthofCommands = commands.length;
// generate the length of the remaining initial array- to give static value

var thingImMovingRight = [];

for (i = 0; i < lengthofCommands; i++) { 
// lenght of commands- 1 or it could be<= to stop before "Done"

if (commands[i].includes('Right'))
 { // looking for move right commands

thingImMovingRight = commands[i];
//shift off that command

rightArray = thingImMovingRight.split(' ');
// turn command into an array

numToRight = rightArray.pop(); 
//pop off last element in array and set to 0 in first case

actualNumber = Number(numToRight);
// turn string value of '0' in to number 0

//console.log(mainArr);

if (actualNumber >= 0 && actualNumber <= mainArr.length - 2) {

let a = mainArr[actualNumber];
// mainArr position 0 = a so a = 'ha'

let b = mainArr[actualNumber + 1]; 
// mainArr position 1 = b so b = Do

mainArr[actualNumber] = b; 
// flop numbers a and b mainArr position 0 = Do

mainArr[actualNumber + 1] = a; // mainArr position 1 = ha

//console.log(a);

//console.log(b);

//index = thingImMovingRight.indexOf("Move Right");

//console.log(mainArr);

}

} else 
if (commands[i].includes('Left'))
 { // looking for move left commands

var thingImMovingLeft = commands[i];
//shift off that command

leftArray = thingImMovingLeft.split(' ');
// turn command into an array

numtoLeft = leftArray.pop(); 
//pop off last element in array and set to 3 in first case

actualNumberLeft = Number(numtoLeft);
// turn string value of '3' in to number 3

if (actualNumberLeft > 0 && actualNumberLeft < mainArr.length) {

let a = mainArr[actualNumberLeft];
// mainArr position 3 = a so a = 'om'

let b = mainArr[actualNumberLeft - 1]; 
// mainArr position 2 = b so b = mm

mainArr[actualNumberLeft] = b; 
// flop numbers a and b mainArr position 3 = mmm

mainArr[actualNumberLeft - 1] = a; // mainArr position 2 = om

//console.log(a);

//console.log(b);

//index r thingImMovingLeft.indexOf("Move Right");

//console.log(mainArr);

}

} else 
if (commands[i].includes('Odd'))
 {

let indexArray = [];

for (j = 0; j < mainArr.length; j++) {

if (j % 2 != 0) {

indexArray.push(mainArr[j]);

}

}

console.log(indexArray.join('
 '));

} else 
if (commands[i].includes('Even'))
 {

let indexArray = [];

for (j = 0; j < mainArr.length; j++) {

if (j % 2 == 0) {

indexArray.push(mainArr[j]);

}

}

console.log(indexArray.join('
 '));

}

weapon = mainArr.join('');

}

console.log(`You crafted ${weapon}!`);

}

//wizard poker
function main(origArray) {

arrayManipulations(origArray);

}



function arrayManipulations(origArray) {

/* [`Innervate:Moonfire:Pounce:Claw:Wrath:Bite`,

`Add Moonfire`,

`Add Pounce`,

`Add Bite`,

`Add Wrath`,

`Insert Claw 0`,

`Swap Claw Moonfire`,

`Remove Bite`,

`Shuffle deck`,

`Ready`

] */

let cards = origArray.shift().split(':');
//['Innervate', 'Moonfire', 'Pounce', 'Claw', 'Wrath', 'Bite']

let newArr = [];

for (i = 0; i < origArray.length - 1; i++) {

let command = origArray[i].split(' ');
//['Add', 'Moonfire']

let action = command[0];

let currCard = command[1];

let currIndex = command[2];

let indexNum = Number(currIndex);

//let card = cards[i];

switch (action) {

case "Add":

if (!cards.includes(currCard))
 {

console.log('Card not found.');

} else {

newArr.push(currCard);

}

//console.log(newArr);

break;

case "Insert":

if (!cards.includes(currCard))
 {

console.log('Error!');

} else {

if (newArr[indexNum] == undefined) {

console.log('Error!');

} else {

newArr.splice(indexNum, 0, currCard);

}

}

//console.log(newArr);

break;

case "Remove":

if (!newArr.includes(currCard))
 {

console.log("Card not found.");

} else {

posRemove = newArr.indexOf(currCard);

newArr.splice(posRemove, 1);

//console.log(newArr);

}

break;

case "Swap":

posOne = newArr.indexOf(currCard);

posTwo = newArr.indexOf(currIndex);

let a = currCard; 
// mainArr position 0 = a so a = 'ha'

let b = currIndex; 
// mainArr position 1 = b so b = Do

newArr[posOne] = b; 
// flop numbers a and b mainArr position 0 = Do

newArr[posTwo] = a; 
// mainArr position 1 = ha

//console.log(newArr);

break;

case "Shuffle":

newArr.reverse();

//console.log(newArr);

break;

}

}

console.log(newArr.join(''));

}

//email validator
function main(arrOfStrings) {
//["AnotherMail.com", "Make Lower", "GetUsername", "Replace a", "Complete"]

let email = arrOfStrings.shift();

for (i = 0; i < arrOfStrings.length - 1; i++) {

let commands = arrOfStrings[i].split(' ');

switch (commands[0]) {

case ('Make'):

if (commands[1] == 'Upper') {

email = email.toUpperCase();

} else {

email = email.toLowerCase();

}

console.log(email);

break;

case ('GetDomain'):

console.log(email.substr(email.length - commands[1], commands[1]));

break;

case ('GetUsername'):

if (email.includes('@'))
 {

console.log(email.substring(0, email.indexOf("@")));

} else {

console.log(`The email ${email} doesn't contain the @ symbol.`);

}

break;

case ('Replace'):

/* let replaceEmail = [];

for (let char of email) {

if (char == commands[1]) {

replaceEmail.push('-');

} else {

replaceEmail.push(char);

} */

let re = new RegExp(commands[1],'g');

email = email.replace(re,'-');

console.log(email);

break;

case ('Encrypt'):

let newemail = [];

for (let char in email) {

newemail.push(email.charCodeAt(char));

}

console.log(newemail.join(''));

break;

}

}

}

//registration
function main(registrations) {
//[1, "U$MichaelU$P@$asdqwe123P@$", "U$NameU$P@$PasswordP@$", "U$UserU$P@$ad2P@$"]

let validRegistration = [];

var number = registrations.shift();

var n = Number(number);

var successfulRegs = 0;

regexPatterntoMatch = /U\$[A-Z][a-z]{2,}U\$P@\$[A-Za-z]{5,}\d+P@\$/g;
//"U$UserU$P@$ad2P@$"

//usernameRegextoMatch = /\b([A-Z][a-z]{3,})/g;

//passwordRegextoMatch = /\b([A-Za-z]{5,}\d+)/g;

for (i = 0; i < n; i++) {

if ((validLogs = regexPatterntoMatch.exec(registrations[i])) !== null) {

console.log('Registration was successful');

validRegistration.push(validLogs[i]);
//['U$MichaelU$P@$asdqwe123P@$']

userCredsArr = registrations[i].split('U$P@$');

username = userCredsArr[0].replace("U$","");

password = userCredsArr[1].replace("P@$","");

//username = usernameRegextoMatch.exec(validLogs[1]);

//password = passwordRegextoMatch.exec(validLogs[2]);

/* if((username = usernameRegextoMatch.exec(validEmail)) !== null){

if((password = passwordRegextoMatch.exec(validEmail)) !== null){

}

} */

console.log(`Username: ${username}, Password: ${password}`);

successfulRegs += 1;

} else {

console.log('Invalid username or password');

}

}

console.log(`Successful registrations: ${successfulRegs}`);

}

//inbox manager
function main(commands) {

/**

* Use map for preserving order

*/

let users = {};

for (let index = 0; index < commands.length; index++) {

const commandStr = commands[index];

if (commandStr.includes("Add"))
 {

const username = commandStr.split("->")[1];

if (!!users[username]) {

console.log(`${username} is already registered`);

} else {

users[username] = { sentEmails: [] };

}

} else if (commandStr.includes("Send")) {

const [send, username, sentEmail] = commandStr.split("->");

if (!!users[username]) {

users[username].sentEmails.push(sentEmail);

}

} else if (commandStr.includes("Delete")) {

const username = commandStr.split("->")[1];

if (!!users[username]) {

delete users[username];

} else {

console.log(`${username} not found!`);

}

} else if (commandStr.includes("Statistics")) {

/**

* {

* username1: { sentEmails: [] },

* username2: { sentEmails: [] }

* }

*/

let usersEntries = Object.entries(users);

/**

* [

* [

* "usernameB",

* {

* sentEmails: [1, 2]

* }

* ]

* [

* "Abc",

* {

* sentEmails: []

* }

* ],

* ]

*/

usersEntries.sort((a,b) => {

let userAUsername = a[0];

let userBUsername = b[0];

let userASentEmailsCount = a[1].sentEmails.length;

let userBSentEmailsCount = b[1].sentEmails.length;

if (userASentEmailsCount > userBSentEmailsCount) {

return -1;

} else if (userASentEmailsCount < userBSentEmailsCount) {

return 1;

} else {

if (userAUsername > userBUsername) {

return 1;

} else if (userAUsername < userBUsername) {

return -1;

} else {

return 0;

}

}

});

console.log(`Users count: ${usersEntries.length}`);

for (let index = 0; index < usersEntries.length; index++) {

const [username, objValue] = usersEntries[index];

const { sentEmails } = objValue;

console.log(username);

for (let index2 = 0; index2 < sentEmails.length; index2++) {

const sentEmail = sentEmails[index2];

console.log(` - ${sentEmail}`);

}

}

break;

}

}

}