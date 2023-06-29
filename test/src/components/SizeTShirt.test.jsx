import { render, screen } from "@testing-library/react";
import { SizeTShirt } from "../../../src/components/SizeTShirt";

describe('Pruebas en SizeTShirt', () => {
    
    test('Debe retornar una lista con las tallas', () => {
        const sizes = ['s','m','l','xl'];

        render(
                <SizeTShirt sizes={sizes}/>
            );
        // screen.debug();
        // seleccionar etiqueta select por medio del data-testid
        const select = screen.getByTestId('select');
        // seleccionar entiqueta select por medio del role
        const select2 = screen.getByRole('combobox');

        expect(select).toBeTruthy();
        expect(select2).toBeTruthy();
        expect(select).toContain(screen.getByRole('option', {name: 'xl'}));
    })
})