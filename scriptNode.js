//creating the function to check if 2 inputs are anagrams
function anagramChecker(){
//get the input of the two words/phrases from bash/terminal
    string1 = process.argv[2];
    string2 = process.argv[3];
    console.log("Input 1 ", string1, " : Input 2 ", string2)

//remove spaces from the strings
    let noSpaces1 = string1.split(" ").join("");
    let noSpaces2 = string2.split(" ").join("");

//remove all non letter characters regex
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
        console.log("Don't forget to enter your words")
    } else if(finalString1.length != finalString2.length){
        console.log("Words are different lengths, anagram not possible")
    } else if (finalString1 === finalString2){
        console.log("Yes these are anagrams!")
    } else {
        console.log("No these are not anagrams")
    }
}

anagramChecker();