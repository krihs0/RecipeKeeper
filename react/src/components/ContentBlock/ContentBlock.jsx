import { Link } from "react-router-dom";
import "./ContentBlock.scss";

const ContentBlock = ({title, text, btnText, btnLink, img}) => {
    return(
        <div className="contentblock">
            <div className="contentblock__text">
                <h2 className="contentblock__text__title">{title}</h2>
                <p className="contentblock__text__description">{text}</p>
                <Link to={btnLink} className="contentblock__text__btn">{btnText}</Link>
            </div>
            <figure className="contentblock__figure">
                <img className="contentblock__figure__img" src={img} alt="" />
            </figure>
        </div>
    )
}

export default ContentBlock;