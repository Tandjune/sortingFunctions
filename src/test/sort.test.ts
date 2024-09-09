import { merge, sort1, sort2, sort3, sort4, sort5 } from "../code/sort";

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

const mergeCases = [
  {
    id: 1,
    input1: [],
    input2: [],
    output: [],
  },
  {
    id: 2,
    input1: [],
    input2: [2],
    output: [2],
  },
  {
    id: 3,
    input1: [1],
    input2: [],
    output: [1],
  },
  {
    id: 4,
    input1: [1, 2, 3],
    input2: [4, 5, 6],
    output: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 5,
    input1: [1, 3, 5],
    input2: [2, 4, 6],
    output: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 6,
    input1: [-6, -2, 4],
    input2: [0.5, 1, 5],
    output: [-6, -2, 0.5, 1, 4, 5],
  },
];

describe("Tests of merging two listes of numbers", () => {
  it.each(mergeCases)(
    "Test case $id for merge",
    ({ input1, input2, output }) => {
      expect(merge(input1, input2)).toEqual(output);
    }
  );
});

describe("Tests of sorting a liste of numbers", () => {
  it.each(cases)("Test case $id for sort1", ({ input, output }) => {
    expect(sort1(input)).toEqual(output);
  });

  it.each(cases)("Test case $id for sort2", ({ input, output }) => {
    expect(sort2(input)).toEqual(output);
  });

  it.each(cases)("Test case $id for sort3", ({ input, output }) => {
    expect(sort3(input)).toEqual(output);
  });

  it.each(cases)("Test case $id for sort4", ({ input, output }) => {
    expect(sort4(input)).toEqual(output);
  });

  it.each(cases)("Test case $id for sort5", ({ input, output }) => {
    expect(sort5(input)).toEqual(output);
  });
});
