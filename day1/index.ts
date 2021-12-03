import fs from "fs";
const getInput = () => {
  const rawInput = fs.readFileSync("./day1/input.txt");
  return rawInput
    .toString()
    .split("\n")
    .map((depth) => parseInt(depth, 10));
};
const partOne = () => {
  const input = getInput();
  const measurements = input.reduce((count, depth, index) => {
    if (index === 0) {
      return count;
    }
    if (depth > input[index - 1]) {
      return count + 1;
    }
    return count;
  }, 0);
  return measurements;
};

const partTwo = () => {
  const input = getInput();
  const windows = input.reduce<number[]>((windows, _, index) => {
    if (index <= input.length - 3) {
      const window = input[index] + input[index + 1] + input[index + 2];
      return [...windows, window];
    }
    return windows;
  }, []);
  const measurements = windows.reduce((count, depth, index) => {
    if (index === 0) {
      return count;
    }
    if (depth > windows[index - 1]) {
      return count + 1;
    }
    return count;
  }, 0);
  return measurements;
};

console.log("partOne", partOne());
console.log("partTwo", partTwo());
