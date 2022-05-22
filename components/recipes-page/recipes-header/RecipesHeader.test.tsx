import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import RecipesHeader from './RecipesHeader'

describe('RecipesHeader', () => {
    it('Renders the site logo', () => {
        render(<RecipesHeader />)

        const siteLogo = screen.getByRole('logo')

        expect(siteLogo).toBeInTheDocument()
    })

    it('Renders search button', () => {

    })

    it('Renders user widget', () => {

    })
})