# Crazy Xmas lights

## 🔢 Instructions

A company that manufactures Christmas lights has asked us to help them.

They have led strips that are like an `Array`. Each position is a led and can be on (`1`) or off (`0`).

**Every 7 seconds**, the leds change state in this way:

If the led is off, it turns on if the led on its left (`index - 1`) was on before.
If the led is on, it remains on.
They asked us for a program that tells us how many seconds it takes for all the leds to turn on. **The seconds are expressed as an integer**. For example:

```javascript
const leds = [0, 1, 1, 0, 1];
countTime(leds); // 7
// 7 seconds because in the first change
// all the lights turned on
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]); // 21
// 21 seconds because it needs three changes:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]); // 28
// 28 seconds because it needs four changes:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
```

**Keep in mind**

- The array will always have at least one led on.
- The array can have any length.
- If all the leds are on, the time is 0.
