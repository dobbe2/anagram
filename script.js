// //get the input of the two words/phrases
// let string1 = document.getElementById("word1").value;
// let string2 = document.getElementById("word2").value;

//creating the function to check if 2 inputs are anagrams
function anagramChecker(string1, string2){
//remove spaces from the strings
    let noSpaces1 = string1.split(" ").join("");
    let noSpaces2 = string2.split(" ").join("");
//seperate each character into an array using the spread operator
    let firstArray = [...noSpaces1];
    let secondArray = [...noSpaces2];
//alphabatize the arrays
    let alphaFirstArray = firstArray.sort();
    let alphaSecondArray = secondArray.sort();
    console.log(alphaFirstArray, alphaSecondArray)
//rejoin characters into comparable strings
    let finalString1 = alphaFirstArray.join("");
    let finalString2 = alphaSecondArray.join("");
    console.log(finalString1, finalString2)
//check if arrays are same
    if(finalString1 === finalString2){
        console.log("same!")
    }else{
        console.log("not the same")
    }
}

anagramChecker("orchestra", "carthorse ");