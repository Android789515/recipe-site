import { atom } from 'recoil'

enum categoryViewOptions {
    list = 'list',
    grid = 'grid'
}
const categoryViewState = atom({
    key: 'categoryView',
    default: categoryViewOptions.grid
})

export { categoryViewOptions, categoryViewState }