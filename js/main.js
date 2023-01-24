var charecter=prompt("Enter the character");

for(i=0;charecter!=String.fromCharCode(i);i++){

}

if(i>=48 && i<=57){
	console.log("number");
}
else if(i>=97 && i<=122 || i>=65 && i<=90){
	console.log("alphabet");
}
else{
	console.log("special characters")
}
