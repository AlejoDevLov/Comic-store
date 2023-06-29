import { fireEvent, render, screen } from "@testing-library/react"
import { ShowItem } from "../../../src/components/ShowItem"

describe('Pruebas en ShowItem', () => {
    const item = {
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
    }
    const executeFn = jest.fn();
    const classBtn = '';

    test('Debe mostrar la informacion del item y ejecutar el useEffect', () => {
        // Crea una  copia de scrollIntoView y se le asigna una funcion
        const scrollIntoViewMock = jest.fn();
        // Toma el valor y funcion original del scrollIntoView y lo guarda
        const originalScrollIntoView = window.Element.prototype.scrollIntoView;
        // Reemplaza la propiedad scrollIntoView por la copia en el prototipo de window.Element
        window.Element.prototype.scrollIntoView = scrollIntoViewMock;

        render(
            <ShowItem item={item} executeFn={executeFn} classBtn={classBtn}/>
        )
        // screen.debug();

        // Restaura la implementación original de scrollIntoView después de las pruebas
        window.Element.prototype.scrollIntoView = originalScrollIntoView;
        expect(screen.getByText('Camiseta Vegeta')).toBeTruthy();
        expect(scrollIntoViewMock).toHaveBeenCalled();
    });

    test('Debe llamar la fn executeFn al dar click en btn', () => {
        const scrollIntoViewMock = jest.fn();
        const originalScrollIntoView = window.Element.prototype.scrollIntoView;
        window.Element.prototype.scrollIntoView = scrollIntoViewMock;
        
        render(
            <ShowItem item={item} executeFn={executeFn} classBtn={classBtn}/>
        )

        window.Element.prototype.scrollIntoView = originalScrollIntoView;
        const btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(executeFn).toHaveBeenCalled();
    });

    test('Debe deshabilitar el boton', () => {
        const item2 = {
            id: 4,
            name: 'Camiseta Vegeta',
            descripcion: 'Camiseta  hecha en Algodon 80% y Poliéster 20%. Con acabados de alta calidad. Producto 100% Colombiano.',
            keyWords: ['camiseta', 'dragon ball', 'vegeta', 'modo dios'],
            talla: ['S', 'M'],
            precio: '$50.000',
            colores: [ 'Negra', 'Gris'],
            anime: 'Dragon ball',
            cantidad: 0,
            url: '/images/dragon-ball/camisetas/4.png',
        }

        const executeFn2 = jest.fn();
        const scrollIntoViewMock = jest.fn();
        const originalScrollIntoView = window.Element.prototype.scrollIntoView;
        window.Element.prototype.scrollIntoView = scrollIntoViewMock;

        render(
            <ShowItem item={item2} executeFn={executeFn2} classBtn={classBtn}/>
        )

        window.Element.prototype.scrollIntoView = originalScrollIntoView;
        const btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(executeFn2).not.toHaveBeenCalled();
        expect(btn.disabled).toBeTruthy();
    })
})