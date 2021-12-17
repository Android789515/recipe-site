export const range = (start: number, end: number) => {
    const numbersInRange = [...Array(end + 1).keys()]

    const removeNumbersOutsideRange = (num: number) => num >= start

    return numbersInRange.filter(removeNumbersOutsideRange)
}