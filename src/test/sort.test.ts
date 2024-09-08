import { sort1 } from "../code/sort";

const cases = [
  {
    id: 1,
    input: [],
    output: [],
  },
  {
    id: 2,
    input: [1],
    output: [1],
  },
  {
    id: 3,
    input: [2, 1],
    output: [1, 2],
  },
  {
    id: 4,
    input: [3, 5, 1, 0, 2, 4],
    output: [0, 1, 2, 3, 4, 5],
  },
  {
    id: 5,
    input: [2, 0, 2, 1, 0],
    output: [0, 0, 1, 2, 2],
  },
  {
    id: 6,
    input: [-2, 0, -1, 2, 1],
    output: [-2, -1, 0, 1, 2],
  },
  {
    id: 7,
    input: [3.3, 0.5, 2.2, 1.1],
    output: [0.5, 1.1, 2.2, 3.3],
  },
  {
    id: 8,
    input: [2, -1, 1, 2.2, -0.5, 0],
    output: [-1, -0.5, 0, 1, 2, 2.2],
  },
];

describe('Tests of sorting a liste of numbers', () => {
  it.each(cases)("test case $id", ({ input, output }) => {
    expect(sort1(input)).toEqual(output);
  });
});
