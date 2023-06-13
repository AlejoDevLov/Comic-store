import { useParams } from "react-router-dom";
import { getItemById } from "../helpers";
import { IconsNavbar } from "../components";

import '../CSS/articlePage.css';
import { useContext } from "react";

export const ArticlePage = () => {

  // const { handleCarList } = useContext(carListContext);

  const {itemName} = useParams();

  const item = getItemById(itemName);
  // console.log(item.descripcion);

  return (
    <>
      <nav className="navbar">
        {/* <IconsNavBar 
          handleCarList={handleCarList}
        /> */}
      </nav>

      <div className="container-article-page article">

        <div className="container-article-item">
          <div className="img-article"><img src={item.url} alt={item.name} loading="lazy"/></div>
          <div className="title-article"><h2>{item.name}</h2></div>
          <div className="description-article"><p>{item.descripcion}</p></div>
          {/* <div className="talla-article"></div> */}
          <div className="price-article">{item.precio}</div>
          <div className="add-to-car"><button>Agregar al Carrito</button></div>
        </div>

        <section className="interested-section"></section>
      </div>
    </>
  )
}
