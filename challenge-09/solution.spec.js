/* eslint-disable no-script-url */
import { groupBy, groupByReduce } from './solution';

describe('Challenge 09: Agrupando cosas automáticamente', () => {
  describe('groupBy(...)', () => {
    const testCases = [
      createTestCase(
        [[6.1, 4.2, 6.3], Math.floor],
        { 6: [6.1, 6.3], 4: [4.2] },
        'should return an object with the numbers grouped by their corresponding integers'
      ),
      createTestCase(
        [['one', 'two', 'three'], 'length'],
        { 3: ['one', 'two'], 5: ['three'] },
        'should return an object with the strings grouped by length'
      ),
      createTestCase(
        [[{ age: 23 }, { age: 24 }], 'age'],
        { 23: [{ age: 23 }], 24: [{ age: 24 }] },
        'should return an object with the objects grouped by age'
      ),
      createTestCase(
        [[1397639141184, 1363223700000], timestamp => new Date(timestamp).getFullYear()],
        { 2013: [1363223700000], 2014: [1397639141184] },
        'should return an object with the timestamps grouped by year'
      ),
      createTestCase(
        [
          [
            { title: 'JavaScript: The Good Parts', rating: 8 },
            { title: 'Aprendiendo Git', rating: 10 },
            { title: 'Clean Code', rating: 9 }
          ],
          'rating'
        ],
        {
          8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
          9: [{ title: 'Clean Code', rating: 9 }],
          10: [{ title: 'Aprendiendo Git', rating: 10 }]
        },
        'should return an object with the books grouped by their rating'
      )
    ];

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(groupBy(...args)).toEqual(expected);
      expect(groupByReduce(...args)).toEqual(expected);
    });
  });
});
