import { render } from "@testing-library/react";
import { ArticlePage } from "../../../src/pages/ArticlePage";
import { BrowserRouter } from "react-router-dom";
import { CarouselArticle } from "../../../src/components";
import { CarProvider, carListContext, ListProvider } from "../../../src/states";

describe('Pruebas en componente CarouselArticle', () => {
    
    test('Debe mostrar el titulo', () => {
        render(
            <BrowserRouter>
                <ListProvider>
                    <carListContext.Provider>
                        <CarProvider>
                            <ArticlePage>
                                <CarouselArticle />
                            </ArticlePage>
                        </CarProvider>
                    </carListContext.Provider>
                </ListProvider>
            </BrowserRouter>
        )
    })
})