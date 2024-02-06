import "./FavoritesSlider.scss";
import { useSwiper } from "swiper/react";

const NavButtons = () => {
    const _swiper = useSwiper();
    
    return(
        <div className="favoritesslider__header__nav">
            <button onClick={()=>_swiper.slidePrev()} className="swiper-button-prev favoritesslider__header__nav__prev">
                <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button onClick={()=>_swiper.slideNext()} className="swiper-button-next favoritesslider__header__nav__next">
                <span className="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
    )
}

export default NavButtons;