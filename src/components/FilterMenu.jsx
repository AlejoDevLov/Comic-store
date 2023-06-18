import { useFilter } from "./hooks/useFilter"

export const FilterMenu = ({ refClass, classFilter }) => {

    const {
        anime,
        product,
        price,
        setFilters,
        cleanFilters,
    } = useFilter();

  return (
    <>
        <div className={classFilter} ref={ refClass }>

            <div className="filter-anime">
                <label htmlFor="anime-select">Anime/Caricatura</label>
                <select name="anime" id="anime-select" ref={anime}>
                    <option value=""></option>
                    <option value="Dragon ball">Dragon Ball</option>
                    <option value="demon slayer">Demon Slayer</option>
                    <option value="seven deadly">Nanatsu no Taizai</option>
                    <option value="los Simpson">Los Simpsons</option>
                    <option value="Mario">Mario Bros</option>
                </select>
            </div>

            <div className="filter-product">
                <label htmlFor="product-select">Producto</label>
                <select name="product" id="product-select" ref={product}>
                    <option value=""></option>
                    <option value="camiseta">Camisetas</option>
                    <option value="llavero">Llaveros</option>
                    <option value="vaso">Vasos</option>
                    <option value="case">Cases</option>
                    <option value="figura">Figuras</option>
                </select>
            </div>

            <div className="filter-price">
                <label htmlFor="price-select">Precios</label>
                <select name="price" id="price-select" ref={price}>
                    <option value=""></option>
                    <option value="menor">Menor a mayor</option>
                    <option value="mayor">Mayor a menor</option>
                </select>
            </div>
            
            <div className="buttons-filter">
                <button onClick={setFilters}>Aplicar filtros</button>
                <button onClick={cleanFilters}>Limpiar filtros</button>
            </div>
        </div>
    </>
  )
}
