export const capitalize = (string: string) => {
    const capitalizedLetter = string.charAt(0).toUpperCase()
    const restOfWord = string.slice(1)

    return capitalizedLetter + restOfWord
}