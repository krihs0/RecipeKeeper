import "./FavoritesSlider.scss";

const FavoritesSlider = () => {

    
    return(
        <section className="favoritesslider">
            <div className="favoritesslider__header">
                <h2 className="favoritesslider__header__title">Jouw favorieten</h2>
                <div className="favoritesslider__header__nav">
                    <button className="favoritesslider__header__nav__prev"></button>
                    <button className="favoritesslider__header__nav__next"></button>
                </div>
            </div>
            <div className="favoritesslider__slider">

            </div>
        </section>
    )
}

export default FavoritesSlider;