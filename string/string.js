// Length of a String
let firstName = "FristName";
console.log(firstName.length);


// Access String Element
console.log(firstName.charAt(2));
console.log(firstName[2]);
console.log(firstName.charCodeAt(2));
 

// Check Presence of Character
console.log(firstName.includes('s'));
console.log(firstName.indexOf("N"));
console.log(firstName.charCodeAt(2));


// compare Two Strings
let anotherName = "AnotherName"
console.log(firstName.localeCompare(anotherName));

// Replace  SubString
const str = "Sunny is Best Designer. Sunny is Best Designer.";
console.log(str.replace("Sunny", "Ravi"));
console.log(str.replaceAll("Sunny", "Ravi"))  


// Split and Join
console.log(str.split(""));
const subString = str.split(" ");
console.log(subString);
console.log(subString.join(" "));


// String Start and End
console.log(str.startsWith("Sunny")); //true;
console.log(str.endsWith("Designer")) // true;


// Trim and Case Conversion
const trimstr = str.trim();
const trimStrStart = str.trimStart();
const trimStrend = str.trimEnd();
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());



// Convert Number and Object to string
const num = 123;
console.log(num, num.toString());

const obj = {
    name : "name",
    address : "Bengaluru",
}
console.log(obj, JSON.stringify(obj));



// Concatenate Strings
const lastName = "LastName";
console.log(firstName.concat(lastName));
console.log(firstName + lastName);
console.log(`${firstName} ${lastName}`);

