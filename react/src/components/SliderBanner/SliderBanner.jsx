import { useEffect, useState } from "react";
import "./SliderBanner.scss";
import pie from "../../assets/temp/pexels-amanda-reed-288264.jpg";
import sandwich from "../../assets/temp/pexels-rajesh-tp-1603901.jpg";
import pasta from "../../assets/temp/pexels-lisa-fotios-1279330.jpg";

const SliderBanner = () => {
    const [current, setCurrent] = useState(1);

    const slides = [
        {
            id: 1,
            image: pie,
            title: "Spinazie Quiche",
            description: "Een heerlijke quiche met spinazie, tomaatjes en wat kaas.",
        },
        {
            id: 2,
            image: pasta,
            title: "Pasta Mozzarella",
            description: "Een heerlijke pasta met mozzarella, tomaatjes en wat basilicum.",
        },
        {
            id: 3,
            image: sandwich,
            title: "Sandwich Gezond",
            description: "Een gezonde sandwich met veel groenten en een lekker sausje.",
        },
    ];

    // setInterval(() => {
    //     if(current === slides.length) {
    //         setCurrent(1);
    //     }else{
    //         setCurrent(current + 1);
    //     }
    // }, 8000);

    const slideClasses = (id) => {
        switch(id) {
            case current:
                return "sliderbanner__container__slide sliderbanner__container__slide--active";
            case current - 1:
                return "sliderbanner__container__slide sliderbanner__container__slide--prev";
            case current + 1:
                return "sliderbanner__container__slide sliderbanner__container__slide--next";
            default:
                return "sliderbanner__container__slide";
        }
    }
    return (
        <section className="sliderbanner">
            <div className="sliderbanner__text">
                {slides.map((slide, index) => {
                    return (
                        <div
                            key={index}
                            className={slide.id === current ? "sliderbanner__text__slide sliderbanner__text__slide--active" : "sliderbanner__text__slide"}
                        >
                            <h3 className="sliderbanner__text__slide__title">{slide.title}</h3>
                            <p className="sliderbanner__text__slide__description">{slide.description}</p>
                            <button className="sliderbanner__text__slide__btn">Bekijk</button>
                        </div>
                    );
                })}
            </div>
            <div className="sliderbanner__container">
                {slides.map((slide, index) => {
                    const classes = slideClasses(slide.id);
                    return (
                        <div
                            key={index}
                            className={`${classes}`}
                        >
                            <img className="sliderbanner__container__slide__img" src={slide.image} alt={slide.title} />
                        </div>
                    );
                })}
                <div className="sliderbanner__container__pagination">
                    {slides.map((slide, index) => {
                        return (
                            <div
                                key={index}
                                className={slide.id === current ? "sliderbanner__container__pagination__dot sliderbanner__container__pagination__dot--active" : "sliderbanner__container__pagination__dot"}
                                onClick={() => setCurrent(slide.id)}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
};

export default SliderBanner;