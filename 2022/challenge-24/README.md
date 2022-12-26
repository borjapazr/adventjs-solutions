# The last challenge is a maze

## 🔢 Instructions

It's the day! Today we're going to deliver gifts… but the warehouses are a maze and the elves are lost.

**Indielfo** Jones wants to **write a program** that, upon receiving a **matrix**, knows if it can quickly exit the maze from its entrance to the exit.

Mazes have the following positions:

`W`: It's a wall, you can't pass through there. `S`: Entry point to the warehouse. `E`: Exit point from the warehouse. ` `: White spaces are where you can pass through.

Valid movements are from one position up, down, left, or right. You can't move diagonally.

```javascript
canExit([
  [' ', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]); // -> true

// You can exit because you start at [0, 4]
// and there's a path to the exit which is [4, 4]

canExit([
  [' ', ' ', 'W', 'W', 'S'],
  [' ', ' ', ' ', 'W', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]); // -> false

// There's no way to get from [0, 4] to [4, 4]
```

**Remember that**:

- You only have to return whether you can exit the maze with a boolean.
- You can't jump over W walls.
- You can't exit the limits of the matrix, you always have to follow an internal path.
