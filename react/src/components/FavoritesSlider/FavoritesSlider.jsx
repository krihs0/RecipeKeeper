import "./FavoritesSlider.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from "../../data/tempsliderData"
import NavButtons from "./NavButtons";

const FavoritesSlider = () => {
    
    return(
        <section className="favoritesslider">
            
            <div className="favoritesslider__slider">
            <Swiper
                spaceBetween={80}
                slidesPerView={3}
            >
                <div className="favoritesslider__header">
                    <h2 className="favoritesslider__header__title">Jouw favorieten</h2>
                    <NavButtons />
                </div>
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="favoritesslider__slider__item">
                                <img className="favoritesslider__slider__item__img" src={item.image} alt={item.title} />
                                <h3 className="favoritesslider__slider__item__title">{item.title}</h3>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            </div>
        </section>
    )
}

export default FavoritesSlider; 