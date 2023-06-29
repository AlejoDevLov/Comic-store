import { fireEvent, render, screen } from "@testing-library/react";
import { CarouselArticle } from "../../../src/components";
import { BrowserRouter } from "react-router-dom";


describe('Pruebas en componente CarouselArticle', () => {
    
    const propsCarousel = { 
        removeClassIconArrow: jest.fn(),
        removeClassIconArrow2: jest.fn(), 
        translateCarousel: jest.fn(),
        setClassIconArrow: jest.fn(), 
        setClassIconArrow2: jest.fn(), 
        elementsCarousel: [{
            id: 4,
            name: 'Camiseta Vegeta',
            descripcion: 'Camiseta  hecha en Algodon 80% y Poliéster 20%. Con acabados de alta calidad. Producto 100% Colombiano.',
            keyWords: ['camiseta', 'dragon ball', 'vegeta', 'modo dios'],
            talla: ['S', 'M'],
            precio: '$50.000',
            colores: [ 'Negra', 'Gris'],
            anime: 'Dragon ball',
            cantidad: 5,
            url: '/images/dragon-ball/camisetas/4.png',
        },], 
        classIcon: 'algo', 
        classIcon2: 'algo', 
        divGrande: {current: null}
      }
    
    test('Debe mostrar el titulo del producto', () => {
        render(
            <BrowserRouter>
                <CarouselArticle propsCarousel={propsCarousel}/>
            </BrowserRouter>
        )
        // screen.debug();
        expect(screen.getByText('Camiseta Vegeta')).toBeTruthy();
    });

    test('Debe navegar al path cuando se de click sobre la card', () => {
        render(
            <BrowserRouter>
                <CarouselArticle propsCarousel={propsCarousel} />
            </BrowserRouter>
        )
        const card = screen.getByRole('link');
        fireEvent.click(card);
        expect(window.location.pathname).toBe('/articlePage/4-Camiseta-Vegeta')
    });

    test('Debe llamar la funcion cuando se da click en left arrow', () => {
        render(
            <BrowserRouter>
                <CarouselArticle propsCarousel={propsCarousel} />
            </BrowserRouter>
        )
        const btn = screen.getByTestId("left-arrow");
        fireEvent.mouseUp(btn);
        expect(propsCarousel.removeClassIconArrow).toHaveBeenCalled();
        expect(propsCarousel.translateCarousel).toHaveBeenCalled();
    });

    test('Debe llamar las funciones cuando se da click en right arrow', () => {
        render(
            <BrowserRouter>
                <CarouselArticle propsCarousel={propsCarousel} />
            </BrowserRouter>
        )
        const btn = screen.getByTestId("right-arrow");
        fireEvent.mouseUp(btn);
        expect(propsCarousel.removeClassIconArrow2).toHaveBeenCalled();
        expect(propsCarousel.translateCarousel).toHaveBeenCalled();
    });

    test('Debe llamar la funcion cuando se ejecuta mouseDown', () => {
        render(
            <BrowserRouter>
                <CarouselArticle propsCarousel={propsCarousel} />
            </BrowserRouter>
        )
        const btn = screen.getByTestId("right-arrow");
        fireEvent.mouseDown(btn);
        fireEvent.mouseDown(btn);
        expect(propsCarousel.setClassIconArrow2).toHaveBeenCalledTimes(2);
    })
})