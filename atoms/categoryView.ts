import { atom } from 'recoil'

const isCategoryViewList = atom({
    key: 'categoryListView',
    default: false
})

export { isCategoryViewList }