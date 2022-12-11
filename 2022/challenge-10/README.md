# The Santa Claus sleigh jump

## 🔢 Instructions

Create a program that checks if Santa's sleigh makes a **parabola jump between cities**. You receive a **number array** that represents the **height** at which the sleigh is at each moment.

For the parabola to be correct, the sleigh's trip must be ascending at the beginning and descending at the end. **It cannot go up again once it has gone down, nor can it start the trip going down**. Let's see some examples:

```javascript
const heights = [1, 3, 8, 5, 2]
checkJump(heights) // true

/*
It's `true`.
The jump goes up-down.

    8 (highest point)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights = [1, 7, 3, 5]
checkJump(heights) // false

/*
It's `false`.
It goes up-down-up.

  7   5
 ↗ ↘ ↗
1   3
```

We need the program to return a boolean that indicates whether the sleigh makes a parabola or not.

**Things to keep in mind**

- The jump is valid if it goes up once and down once. If the sleigh stays at the same height between two positions, the parabola continues.
- It is not necessary for the starting and ending points to be the same (cities can be at different heights).
