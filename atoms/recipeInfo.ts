import { atom } from 'recoil'

export type Id = string

interface Ingredient {
    id: Id
    name: string,
    calories: string
}

interface Step {
    id: Id
    textContent: string
}

interface Image {
    src: string
}

const generalInfoData = atom({
    key: 'generalInfoData',
    default: {
        name: '',
        folder: '',
        rating: 0,
        difficulty: '',
        time: '',
        totalCalories: 0
    }
})

const ingredientsData = atom({
    key: 'ingredientsData',
    default: Array<Ingredient>()
})

const stepsData = atom({
    key: 'stepsData',
    default: Array<Step>()
})

export { generalInfoData, ingredientsData, stepsData }