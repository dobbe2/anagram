//creating the function to check if 2 inputs are anagrams
function anagramChecker(){

//get the input of the two words/phrases
    let string1 = document.getElementById("word1").value;
    let string2 = document.getElementById("word2").value;

//remove spaces from the strings
    let noSpaces1 = string1.split(" ").join("");
    let noSpaces2 = string2.split(" ").join("");

//remove all non letter characters
    let noSpaces1Clean = noSpaces1.replace(/[^A-Za-z]/g, '');
    let noSpaces2Clean = noSpaces2.replace(/[^A-Za-z]/g, '');

//change all characters to lowercase
    let lowerArray1 = noSpaces1Clean.toLowerCase();
    let lowerArray2 = noSpaces2Clean.toLowerCase();

//seperate each character into an array using the spread operator
    let firstArray = [...lowerArray1];
    let secondArray = [...lowerArray2];

//alphabatize the arrays
    let alphaFirstArray = firstArray.sort();
    let alphaSecondArray = secondArray.sort();

//rejoin characters into comparable strings
    let finalString1 = alphaFirstArray.join("");
    let finalString2 = alphaSecondArray.join("");

//check if arrays are same
    if (finalString1.length < 1 && finalString2.length < 1){
        document.getElementById("result-area").innerHTML = "Don't forget to add your words!";
    } else if(finalString1.length != finalString2.length){
        document.getElementById("result-area").innerHTML = "Make sure they are the same length!";
    } else if (finalString1 === finalString2){
        document.getElementById("result-area").innerHTML = "Yes, these are anagrams!";
    } else {
        document.getElementById("result-area").innerHTML = "No, these are not anagrams";
    }
}

//accept the enter key as submit for word 1
let word1 = document.getElementById("word1");
word1.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("get-user-input").click();
    }
})

//accept the enter key as submit for word 2
let word2 = document.getElementById("word2");
word2.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("get-user-input").click();
    }
})