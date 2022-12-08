# We need a mechanic!

## 🔢 Instructions

Some electric sleds have broken down and the elves are looking for spare parts to fix them, but they are not sure if the parts they have are valid.

The spare parts are strings and the mechanic Elfon Masc has said that a spare part is valid **if the part can be a palindrome after removing, at most, one character**.

_A palindrome is a word or phrase that reads the same from left to right as it does from right to left_.

Our function should return a boolean that indicates whether the spare part is valid or not with that rule:

```javascript
checkPart('uwu'); // true
// "uwu" is a palindrome without removing any character

checkPart('miidim'); // true
// "miidim" can be a palindrome after removing the first "i"

checkPart('midu'); // false
// "midu" cannot be a palindrome after removing a character
```
