# Optimizing Santa's trips

## 🔢 Instructions

To not tire the reindeer, Papa Noel wants to leave the maximum number of gifts by making the least number of trips possible.

He has an array of cities where each element is the **number of gifts he can leave there**. For example, `[12, 3, 11, 5, 7]`. He also has a **limit on the number of gifts** that can fit in his bag, and finally, the **maximum number of cities** that his reindeer can visit.

As he doesn't want to leave a city half-way, **if he can't leave all the gifts that are from that city, he doesn't leave any there**.

Create a program that tells him the **highest sum of gifts that he could distribute**, taking into account the maximum number of gifts and the maximum number of cities he can visit. For example:

```javascript
const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

// the highest sum of gifts to distribute
// visiting a maximum of 3 cities
// is 20: [12, 3, 5]

// the highest sum would be [12, 7, 11]
// but it exceeds the limit of 20 gifts and he
// would have to leave a city half-way.

getMaxGifts(giftsCities, maxGifts, maxCities); // 20 (12 + 3 + 5)
```

If it is not possible to make any trips that satisfies everything, the result should be 0. More examples:

```javascript
getMaxGifts([12, 3, 11, 5, 7], 20, 3); // 20
getMaxGifts([50], 15, 1); // 0
getMaxGifts([50], 100, 1); // 50
getMaxGifts([50, 70], 100, 1); // 70
getMaxGifts([50, 70, 30], 100, 2); // 100
getMaxGifts([50, 70, 30], 100, 3); // 100
getMaxGifts([50, 70, 30], 100, 4); // 100
```

**To consider**:

- `maxGifts >= 1`
- `giftsCities.length >= 1`
- `maxCities >= 1`
- The number of `maxCities` can be greater than `giftsCities.length`
