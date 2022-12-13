# Electric sleighs, wow!

## 🔢 Instructions

Santa Claus has new electric sleighs but he must control the electricity consumption because **he only has a 20W battery**.

We are given an **array of sleighs, from worst to best**, with their respective consumptions. Each sleigh is an object with two properties: `name` and `consumption`.

The `consumption` field is a number that represents the amount of watts (W) that **consumes** the sleigh for each **distance unit**. The `name` field is a string that represents the sleigh name.

Create a program that returns the name of the best sleigh available that allows us to cover the distance.

```javascript
const distance = 30;
const sleighs = [
  { name: 'Gorusuke', consumption: 0.3 },
  { name: 'Madeval', consumption: 0.5 },
  { name: 'Lolivier', consumption: 0.7 },
  { name: 'Hyuuh', consumption: 1 }
];

selectSleigh(distance, sleighs); // => "Madeval"

// Gorusuke consumes 9W to cover 30 distance
// Madeval consumes 15W to cover 30 distance
// Lolivier consumes 21W to cover 30 distance
// Hyuuh consumes 30W to cover 30 distance

// The best sleigh to cover the distance is Madeval.

// Gorusuke covers the distance but it's a worse sleigh
// Lolivier and Hyuuh can't cover the distance with 20W.
```

**Remember that**:

- The battery is always 20W.
- The list of sleighs is ordered from worst to best sleigh.
- You have to return the name of the best sleigh that allows us to cover the distance with the watts we have available.
- If no sleigh can be used, then return `null`.
