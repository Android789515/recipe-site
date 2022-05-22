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
        render(<RecipesHeader />)

        const searchButton = screen.getByRole('button')

        expect(searchButton).toBeInTheDocument()
    })

    it('Renders user widget', () => {
        render(<RecipesHeader />)

        const userWidget = screen.getByRole('menu')

        expect(userWidget).toBeInTheDocument()
    })
})