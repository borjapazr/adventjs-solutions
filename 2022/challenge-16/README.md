# Fixing Santa Claus' letters

## 🔢 Instructions

Santa Claus is starting to receive a lot of letters but they have some formatting problems. To improve readability, he will write a program that given a text, formats it according to the following rules:

- Remove spaces at the beginning and end of the prase
- Remove multiple spaces and leave only one
- Leave a space after each comma and point
- Remove spaces before comma or point
- Questions must only end with a question mark
- The first letter of each sentence must be capitalized
- Put the word "Santa Claus" in uppercase if it appears in the letter
- Put a point at the end of the sentence if it does not have punctuation
- Letters are written in English and here we have an example:

```javascript
fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `);
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?");
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
```

**Note**:

- You do not have to worry about punctuation marks other than comma, point or question mark.
- Make sure you respect break lines and original whitespaces.
