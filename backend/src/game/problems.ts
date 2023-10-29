export type ProblemType = {
  id: number,
  title: string,
  description: string,
  examples: {
    input: any[],
    output: any,
  }[],
  testCases: {
    input: any[],
    output: any,
  }[],
};

const problems = [
  {
    id: 1,
    title: 'Add Two Numbers',
    description: 'Adding Practice',
    examples: [
      {
        input: [1,2],
        output: 2,
      },
    ],
    testCases: [
      {
        input: [3,2],
        output: 5,
      },
    ],
  },
];

export default problems;
