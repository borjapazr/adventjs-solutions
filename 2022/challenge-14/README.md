# The best path

## 🔢 Instructions

Santa Claus is building ice pyramids in the North Pole to train his reindeers.

Each reindeer starts at the top of the pyramid and must choose the optimal path down to travel it **in the shortest time possible**. Each level has a number that determines the time it takes to get there.

When arriving at a position, the reindeer **can only slide down and diagonally to the left or right**. Visually, the pyramid looks like this:

```javascript
    0
   / \
  7   4
 / \ / \
2   4   6
```

In code we represent it like this:

```javascript
[[0], [7, 4], [2, 4, 6]];
```

Santa Claus needs a program that tells him what the minimum time each reindeer can take to slide down the pyramid using the optimal path.

In the previous example, the optimal path is `0 -> 4 -> 4`, which takes a total of `0 + 4 + 4 = 8` units of time. The result would be: `8`.

Why is it not `6`? It is not `0 -> 4 -> 2` because when you go down to the position of the `4` you can no longer diagonally reach the position of the `2`. So the shortest possible path is `8`. More examples:

```javascript
getOptimalPath([[0], [2, 3]]); // 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]); // 5

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]); // 8
```

**To keep in mind**:

- Keep in mind that you can only go down diagonally and down from any position.
- The first position of the pyramid can be different from 0.
- Pyramids can have up to 10 levels.
- The numbers in the pyramids can be negative.
