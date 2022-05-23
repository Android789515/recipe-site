import styles from '../../../styles/recipes-page/recipes-header/RecipesHeader.module.scss'

import SiteLogo from '../../generic-components/SiteLogo'
import SearchButton from './search-button/SearchButton'
import UserWidget from './user-widget/UserWidget'

const RecipesHeader = () => {
    return (
        <header className={styles.recipesHeader}>
            <SiteLogo />

            <SearchButton />
            <UserWidget />
        </header>
    )
}

export default RecipesHeader