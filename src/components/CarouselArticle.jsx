import { Link } from "react-router-dom"

export const CarouselArticle = ({ propsCarousel }) => {

    const {divGrande, elementsCarousel, setClassIconArrow,
            classIcon,setClassIconArrow2, classIcon2,
            removeClassIconArrow, removeClassIconArrow2, translateCarousel} 
        = propsCarousel;

  return (
    <section className="related-products">

          <h2>Poductos similares</h2>

          <div className="slider-container">
            <div className="slider-grande" ref={divGrande}>
              {
                elementsCarousel.map( (item, i) => (
                  <div className="item-carousel" key={i}>
                    <Link to={`/articlePage/${item.id}-${item.name.replace(/\s/g,'-')}`}><img src={item.url} alt={item.name} /></Link>
                    <h3>{item.name}</h3>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="arrows-slider">
            <div 
              onMouseDown={setClassIconArrow} 
              onMouseUp={() => (removeClassIconArrow(), translateCarousel())}
              className={classIcon}
            >
              <ion-icon name="arrow-back-circle"></ion-icon>
            </div>
            <div 
              onMouseDown={setClassIconArrow2} 
              onMouseUp={ () => (removeClassIconArrow2(), translateCarousel())}
              className={classIcon2}
            >
              <ion-icon name="arrow-forward-circle"></ion-icon>
            </div>
          </div>

        </section>
  )
}
