# We ran out of ink!

## 🔢 Instructions

We are printing barcodes for the packages. At Santa's factory we use a numbering system where each number is printed with a different ink. It's an old but reliable system. However, sometimes we run out of ink for a number.

**Write a function** that **receives the number we don't have ink for** (a number between 0 and 9) and as a second parameter, **the number of barcodes to print** (we start from 1 to the number we receive).

It should **return an array with the numbers that include the number we don't have ink for**. Let's see an example:

```javascript
dryNumber(1, 15); // [1, 10, 11, 12, 13, 14, 15]

// we don't have ink for the number 1
// we have to print 15 barcodes from 1 to 15
// the barcodes that will be wrong because of the lack of ink are:
// 1, 10, 11, 12, 13, 14, 15

dryNumber(2, 20); // [2, 12, 20]

// we don't have ink for the number 2
// we have to print 20 barcodes from 1 to 20
// the barcodes that will be wrong because of the lack of ink are:

// 2, 12, 20
```

**Keep in mind that**:

- The number we don't have ink for can only be between 0 and 9.
- The number we don't have ink for can be in any position of the barcode.
- The number of barcodes to print can be very large.
