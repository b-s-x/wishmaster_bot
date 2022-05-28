export type Data = {
  id: number;
  name: string;
};

export const resultsToString = (results: Data[]): string => results
  .map(({ id, name }) => `\n${id}: ${name}`)
  .join();
