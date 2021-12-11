import { atom } from 'recoil'

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
        ingredients: [],
        steps: [],
        images: []
    }
})

export default recipeInfo