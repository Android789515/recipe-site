import SiteLogo from '../../generic-components/SiteLogo'
import SearchButton from './search-button/SearchButton'
import UserWidget from './user-widget/UserWidget'

const RecipesHeader = () => {
    return (
        <header>
            <SiteLogo />

            <SearchButton />
            <UserWidget />
        </header>
    )
}

export default RecipesHeader