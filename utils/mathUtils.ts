export const range = (start: number, end: number) =>
    [...Array(end + 1).keys()].filter(num => num >= start)