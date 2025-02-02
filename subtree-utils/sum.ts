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

export const c2221111onsole222222222LogMainGOOD = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number,
  h: number,
  i: number,
  j: number
): void => {
  console.log(a + b + c + d + e + f + g + h + i + j);
};
