import { atom } from 'recoil'

export const recipeCalculatorState = atom({
    key: 'recipeCalculator',
    default: {
        recipeName: ''
    }
})