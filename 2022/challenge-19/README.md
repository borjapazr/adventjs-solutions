# Sorting the toys!

## 🔢 Instructions

The day is coming and Santa Claus has the toy store a mess. Help him to sort the toys in the warehouse so he can find them easier.

For this, we are given two arrays. **The first is an array of toys**, and the second is an **array of numbers** that indicate the position of each toy in the warehouse.

Te only thing to keep in mind is that **the positions may not start at 0**, although they will always be consecutive numbers and in ascending order.

We have to **return an array where each toy is in the position it corresponds to**.

```javascript
const toys = ['ball', 'doll', 'car', 'puzzle'];
const positions = [2, 3, 1, 0];

sortToys(toys, positions);
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo'];
const morePositions = [8, 6, 5, 7, 9];

sortToys(moreToys, morePositions);
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
```

**Things to keep in mind:**

- There will always be the same number of toys as positions.
- Neither the toys nor the positions are repeated.
