export type ProblemType = {
  id: number,
  title: string,
  description: string,
  header: string,
  funcName: string,
  examples: {
    input: any[],
    output: any,
  }[],
  testCases: {
    input: any[],
    output: any,
  }[],
};

const problems: ProblemType[] = [
  {
    id: 1,
    title: 'Add Two Numbers',
    description: 'Adding Practice',
    header: 'def add(a, b):',
    funcName: 'add',
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
