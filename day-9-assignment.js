var numA = 62,
	numB = 28;

console.log(numA + numB);			//this solves problem 1a

var string1 = "hello,",
	string2 = " world";

console.log(string1 + string2);		//this solves problem 1b

var array1 = ["Phillies", "Eagles", "Sixers", "Flyers"];

console.log(array1[2]);
console.log(array1[3]);				//this solves problem 2

function newNumber(x) {

if (x < 100) {
	alert("This number is less than 100")
} else if (x > 100) {
	alert("This number is greater than 100")		
} else if (x === 100) {
	alert("This number is 100")
}
};									//this solves problem 3

function nameFunc(a) {

	if (a === "Jeff") {
		console.log(a + ", well thats a silly name");
	} else {
	console.log(arguments[0]);
 }
 };									//this solves problem 4


function doorPrize(a) {
	if (a === 1) {
		alert("You've selected door number one")
		alert("You've won a toaster oven")
	} else if (a === 2) {
		alert("You've selected door number two")
		alert("You've won a microwave")
	} else if (a === 3) {
		alert("You've selected door number three")
		alert("You've won a refrigerator")
	} else {
		alert("You've selected the basement door")
		alert("You've won nothing")
	}
};									//this solves problem 5, and shows the effects of coding before lunchtime

