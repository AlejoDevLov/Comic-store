import { getItemById } from "../../../src/helpers"

describe('Pruebas en el archivo getItemById', () => {
    const elements = [
        {
            id: 1,
            name: 'goku',
            tipo: 'camiseta'
        },
        {
            id: 2,
            name: 'vegeta',
            tipo: 'camiseta'
        }
    ]
    
    test('Debe retornar el objeto que haga match con itemName', () => {
        const itemName = '1-goku'
        const getItem = getItemById(elements, itemName);
        
        expect(getItem).toBe(elements[0]);
    });

    test('debe retornar undefined si no se pasa el correcto argumento', () => {
        const itemName = 'bob-esponja';
        const getItem = getItemById(elements, itemName);

        expect(getItem).toBeFalsy();
        expect(getItem).toBe(undefined);
    })
})