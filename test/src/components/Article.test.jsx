import { fireEvent, render, screen } from "@testing-library/react"
import { Article } from "../../../src/components/Article"
import { carContext } from "../../../src/states";
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en Article', () => {
    
    const item = {
        id: 4,
        name: 'Camiseta Vegeta',
        descripcion: 'Camiseta  hecha en Algodon 80% y Poliéster 20%. Con acabados de alta calidad. Producto 100% Colombiano.',
        keyWords: ['camiseta', 'dragon ball', 'vegeta', 'modo dios'],
        talla: ['S', 'M'],
        precio: '$50.000',
        colores: [ 'Negra', 'Gris'],
        anime: 'Dragon ball',
        cantidad: 3,
        url: '/images/dragon-ball/camisetas/4.png',
    }

    const onSetState = jest.fn();
    const state = [];
    const dispatchCar = jest.fn();

    test('Debe hacer match con el snapshop', () => {
        
        const {container} = render(
            <carContext.Provider value={{ state, dispatchCar }}>
                <MemoryRouter>
                    <Article element={item} onSetState={onSetState}/>
                </MemoryRouter>
            </carContext.Provider>
        )
        // screen.debug();

        expect(container).toMatchSnapshot('Article');
    });

    test('Debe mostrar la informacion del item', () => {
        render(
            <carContext.Provider value={{ state, dispatchCar }}>
                <MemoryRouter>
                    <Article element={item} onSetState={onSetState}/>
                </MemoryRouter>
            </carContext.Provider>
        )

        expect(screen.getByText('Camiseta Vegeta')).toBeTruthy();
    });

    test('Debe llamar la funcion executeFn al dar click en btn', () => {        

        render(
            <carContext.Provider value={{ state, dispatchCar }}>
                <MemoryRouter>
                    <Article element={item} onSetState={onSetState}/>
                </MemoryRouter>
            </carContext.Provider>
        );
        const btn = screen.getByRole('button');
        fireEvent.click(btn);
        // se ejecuta console.log desde la fn en useArticle.js
    })
})