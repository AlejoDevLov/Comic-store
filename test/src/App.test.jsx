import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { App } from "../../src/App"

describe( 'Pruebas en el componente App y sus rutas', () => {

    test('Debe renderizar la HomePage', () => {
        render(
            <MemoryRouter initialEntries={['/home']}>
                <App/>
            </MemoryRouter>
        )
        // screen.debug();
        expect(screen.getByText('ANIMECO SHOP')).toBeTruthy();
    });

    test( 'Debe hacer match con el snapshot en HomePage', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/home']}>
                <App/>
            </MemoryRouter>
        )
        // screen.debug();
        expect(container).toMatchSnapshot();
    });

    test('Debe renderizar el componente ShopPage', () => {
        const {container} = render(
                <MemoryRouter initialEntries={['/shop/dragon-ball']}>
                    <App/>
                </MemoryRouter>
                )
        // screen.debug();
        const nav = container.querySelector('nav');
        expect(nav).toBeTruthy();
    })
})