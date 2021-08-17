# Anagram Checker

## Challenge:
An <b>anagram</b> is a word or phrase formed by rearranging the letters of a different word or phrase irrespective of spaces. For example, "orchestra" and "carthorse." Another example is "rail safety" and  "fairy tales." Given two words or phrases, determine if they're anagrams of each other.

## Check It Out Here
https://dobbe2.github.io/anagram/

## Process For Solving (psuedocode)
Here is how I will calculate if two words or phrases or groups of letters are anagrams of eachother

Example: listen --- silent 

The first step will be to take 2 string inputs

Then seperating the phrase or word into individual letters

    example: listen --> l, i, s, t, e, n 
             silent --> s, i, l, e, n, t

Then reordering the set of letters into alphabetical order

    l, i, s, t, e, n --> e, i, l, n, s, t
    s, i, l, e, n, t --> e, i, l, n, s, t

Then compare the two sets of letters. If they are exactly the same, they are considered anagrams of eachother.

## Sources:
changing .split to ES6 spread operator-
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

removing spaces from a string using JS-
https://www.geeksforgeeks.org/how-to-remove-spaces-from-a-string-using-javascript/

removing non letter characters from the strings
https://stackoverflow.com/questions/9364400/remove-not-alphanumeric-characters-from-string

## Troubles
when i get my 2 strings alphabetized and compared, they were not returning equal, even if the characters where exactly the same. <br>
example ['a', 'b', 'c'] != ['a', 'b', 'c'] <br>
I decided to rejoin the characters in the array with join()
abc === abc <br>
I found that using toString() also solved the problem
a,b,c === a,b,c

## Scenerios For Bugs/Troubles
Needing to use some sort of validation to accept only letters, and omit or bypass other characters such as apostraphies, colons, or other characters that may cause 2 anagrams to not be equal to eachother.<br>
*SOLVED

The 2 phrases or words would need to have the same amount of characters. Otherwise, there would not be a chance for an anagram.<br>
*SOLVED 
