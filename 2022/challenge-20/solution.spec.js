import { howManyReindeers } from './solution';

describe('Challenge 20: More challenging trips', () => {
  describe('howManyReindeers(...)', () => {
    const testCases = [
      createTestCase(
        [
          [
            { type: 'Nuclear', weightCapacity: 50 },
            { type: 'Electric', weightCapacity: 10 },
            { type: 'Gasoline', weightCapacity: 5 },
            { type: 'Diesel', weightCapacity: 1 }
          ],
          [
            { country: 'Spain', weight: 30 },
            { country: 'France', weight: 17 },
            { country: 'Italy', weight: 50 }
          ]
        ],
        [
          {
            country: 'Spain',
            reindeers: [
              {
                type: 'Electric',
                num: 1
              },
              {
                type: 'Gasoline',
                num: 3
              },
              {
                type: 'Diesel',
                num: 5
              }
            ]
          },
          {
            country: 'France',
            reindeers: [
              {
                type: 'Electric',
                num: 1
              },
              {
                type: 'Gasoline',
                num: 1
              },
              {
                type: 'Diesel',
                num: 2
              }
            ]
          },
          {
            country: 'Italy',
            reindeers: [
              {
                type: 'Electric',
                num: 3
              },
              {
                type: 'Gasoline',
                num: 3
              },
              {
                type: 'Diesel',
                num: 5
              }
            ]
          }
        ],
        'should return the distribution of reindeer capable of delivering gifts from each country (1)'
      ),
      createTestCase(
        [
          [
            { type: 'Electric', weightCapacity: 10 },
            { type: 'Gasoline', weightCapacity: 5 },
            { type: 'Diesel', weightCapacity: 1 }
          ],
          [{ country: 'Spain', weight: 37 }]
        ],
        [
          {
            country: 'Spain',
            reindeers: [
              {
                type: 'Electric',
                num: 2
              },
              {
                type: 'Gasoline',
                num: 2
              },
              {
                type: 'Diesel',
                num: 7
              }
            ]
          }
        ],
        'should return the distribution of reindeer capable of delivering gifts from each country (2)'
      ),
      createTestCase(
        [
          [
            { type: 'Nuclear', weightCapacity: 50 },
            { type: 'Electric', weightCapacity: 10 },
            { type: 'Gasoline', weightCapacity: 5 },
            { type: 'Diesel', weightCapacity: 1 }
          ],
          [
            { country: 'Spain', weight: 30 },
            { country: 'Germany', weight: 7 },
            { country: 'France', weight: 17 },
            { country: 'Italy', weight: 50 }
          ]
        ],
        [
          {
            country: 'Spain',
            reindeers: [
              {
                type: 'Electric',
                num: 1
              },
              {
                type: 'Gasoline',
                num: 3
              },
              {
                type: 'Diesel',
                num: 5
              }
            ]
          },
          {
            country: 'Germany',
            reindeers: [
              {
                type: 'Gasoline',
                num: 1
              },
              {
                type: 'Diesel',
                num: 2
              }
            ]
          },
          {
            country: 'France',
            reindeers: [
              {
                type: 'Electric',
                num: 1
              },
              {
                type: 'Gasoline',
                num: 1
              },
              {
                type: 'Diesel',
                num: 2
              }
            ]
          },
          {
            country: 'Italy',
            reindeers: [
              {
                type: 'Electric',
                num: 3
              },
              {
                type: 'Gasoline',
                num: 3
              },
              {
                type: 'Diesel',
                num: 5
              }
            ]
          }
        ],
        'should return the distribution of reindeer capable of delivering gifts from each country (3)'
      ),
      createTestCase(
        [
          [
            { type: 'Diesel', weightCapacity: 1 },
            { type: 'Gasoline', weightCapacity: 5 }
          ],
          [
            { country: 'Spain', weight: 30 },
            { country: 'Germany', weight: 7 }
          ]
        ],
        [
          {
            country: 'Spain',
            reindeers: [
              {
                type: 'Gasoline',
                num: 5
              },
              {
                type: 'Diesel',
                num: 5
              }
            ]
          },
          {
            country: 'Germany',
            reindeers: [
              {
                type: 'Gasoline',
                num: 1
              },
              {
                type: 'Diesel',
                num: 2
              }
            ]
          }
        ],
        'should return the distribution of reindeer capable of delivering gifts from each country (4)'
      )
    ];

    it('#T should return an array', () => {
      expect(howManyReindeers([], [])).toBeInstanceOf(Array);
    });

    it.each(testCases)('#$# $description', ({ args, expected }) => {
      expect(howManyReindeers(...args)).toEqual(expected);
    });
  });
});
