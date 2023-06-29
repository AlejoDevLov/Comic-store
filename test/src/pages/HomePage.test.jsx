import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import HomePage from "../../../src/pages/HomePage"


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
}))

beforeEach( () => jest.clearAllMocks());

describe('Pruebas en HomePage', () => {

    test('Debe mostrar el nombre de la tienda', () => {
        render(
            <MemoryRouter>
                <HomePage/>
            </MemoryRouter>
        )
        // screen.debug();
        expect(screen.getByText('ANIMECO SHOP')).toBeTruthy();
    });

    test('Debe navegar al hacer click en una card', () => {
        render(
            <BrowserRouter>
                <HomePage/>
            </BrowserRouter>
        )
        // screen.debug();
        const cardDemon = screen.getByTestId('demon');
        fireEvent.click(cardDemon);
        expect(window.location.pathname).toBe("/shop/demon-slayer");
    })
})