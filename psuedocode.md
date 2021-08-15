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

notes: spaces do not count towards the match

Removal of any spaces will be required, using a split/join combination

