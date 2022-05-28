type Data = {
  id: number;
  name: string;
};

export const resultsToString = (results: Data[]) => results
  .map(({ id, name }) => `\n${id}: ${name}`)
  .join();
