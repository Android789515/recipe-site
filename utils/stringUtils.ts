export const capitalize = (string: string) => {
    const capitalizedLetter = string.charAt(0).toUpperCase()

    return `${capitalizedLetter}${string.slice(1)}`
}