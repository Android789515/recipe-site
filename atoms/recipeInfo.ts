import { atom } from 'recoil'

type Id = string

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

const recipeInfo = atom({
    key: 'recipeInfo',
    default: {
        generalInfo: {
            name: '',
            folder: '',
            rating: 0,
            difficulty: '',
            time: '',
            totalCalories: 0
        },
        ingredients: Array<Ingredient>(),
        steps: Array<Step>(),
        images: []
    }
})

export default recipeInfo