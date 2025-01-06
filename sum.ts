import { useQuery } from "react-query";

export const sum = (a: number, b: number, c: number): number => a + b + c;
export const sumAsync = async (
  a: number,
  b: number,
  c: number
): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b + c);
    }, 1000);
  });
};
export const consoleLog = (
  a: number,
  b: number,
  c: number,
  d: number
): void => {
  console.log(a + b + c + d);
};
