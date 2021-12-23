export const range = (start: number, end: number) => {
    const numbersInRange = [...Array(end + 1).keys()]

    const removeNumbersOutsideRange = (num: number) => num >= start

    return numbersInRange.filter(removeNumbersOutsideRange)
}

export const sum = (numbers: number[]) => {
    if (numbers.length > 0) {
        return numbers.reduce((total, number) => total + number)
    }

    return 0
}