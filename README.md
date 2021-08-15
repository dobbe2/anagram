# anagram

## Challenge:
An <b>anagram</b> is a word or phrase formed by rearranging the letters of a different word or phrase irrespective of spaces. For example, "orchestra" and "carthorse." Another example is "rail safety" and  "fairy tales." Given two words or phrases, determine if they're anagrams of each other.

## Sources:
changing .split to ES6 spread operator-
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

removing spaces from a string using JS-
https://www.geeksforgeeks.org/how-to-remove-spaces-from-a-string-using-javascript/

## troubles
when i get my 2 strings alphabetized and caompared, they were not returning equal, even is the characters where exactly the same. 
example ['a', 'b', 'c'] != ['a', 'b', 'c']
I decided to rejoin the characters in the array with join()
abc === abc
I found that using toString() also solved the problem
a,b,c === a,b,c

## scenerios for bugs/troubles
Needing to use some sort of validation to accept only letters, and omit or bypass other characters such as apostraphies, colons, or other characters that may cause 2 anagrams to not be equal to eachother.
