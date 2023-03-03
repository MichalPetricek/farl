import React from "react";
import "./Sluzby.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from "../../Images/Sluzby/Carousel/item1.png";
import img2 from "../../Images/Sluzby/Carousel/item2.png";
import img3 from "../../Images/Sluzby/Carousel/item3.png";
import img4 from "../../Images/Sluzby/Carousel/item4.png";
import img5 from "../../Images/Sluzby/Carousel/item5.png";
import img6 from "../../Images/Sluzby/Carousel/item6.png";
import img7 from "../../Images/Sluzby/Carousel/item7.png";
import img8 from "../../Images/Sluzby/Carousel/item8.png";
import img9 from "../../Images/Sluzby/Carousel/item9.png";
import { Helmet } from "react-helmet-async";
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Vysivka = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1200 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1200, min: 700 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1
        }
      };
    return(
        <div className="sluzby-page">
             <Helmet>
                <title>FARL výšivka</title>
                <meta name="description" content="Vlastní výroba s kapacitou cca 4000ks výšivek měsíčně." />
                <link rel="canonical" href="/vysivka"></link>
            </Helmet>
            <div className="sluzby-bg">
                <h1 className="sluzby-main">Výšivka</h1>
            </div>
            <div className="sluzby-text">
                <p><p className="sluzby-znak">-</p> Vlastní výroba s kapacitou až 4000ks výšivek měsíčně.</p>
                <p><p className="sluzby-znak">-</p> Výšivky, nášivky, aplikace, Twill aplikace.</p>
                <p><p className="sluzby-znak">-</p> Nabízíme také 3D výšivky, sublimační nášivky, reflexní a fluorescenční výšivky, speciální aplikace a kombinace materiálů.</p>
                <div className="sluzby-line"></div>
            </div>
            <div className="sluzby-carousel-container">
                <h3 className="sluzby-produkty-text">naše produkty</h3>
                <Carousel showDots={false} responsive={responsive} ssr={true}>
                    <img className="sluzby-carousel-img" alt="img" src={img1}></img>
                    <img className="sluzby-carousel-img" alt="img1" src={img7}></img>
                    <img className="sluzby-carousel-img" alt="img2" src={img3}></img>
                    <img className="sluzby-carousel-img" alt="img3" src={img4}></img>
                    <img className="sluzby-carousel-img" alt="img4" src={img5}></img>
                    <img className="sluzby-carousel-img" alt="img5" src={img9}></img>
                    <img className="sluzby-carousel-img" alt="img6" src={img8}></img>
                    <img className="sluzby-carousel-img" alt="img7" src={img2}></img>
                    <img className="sluzby-carousel-img" alt="img8" src={img6}></img>
                </Carousel>
            </div>
            <div className="sluzby-eshop">
                    <div className="sluzby-eshop-grid">
                        <h3 className="sluzby-eshop-text">Neváhejte objednat vlastní výšivku na našem eshopu.</h3>
                        <div>
                            <Link to={"../eshop"} className="sluzby-eshop-button">e-shop/výšivka</Link>
                            {/*<a href="https://www.shoptet.cz" className="sluzby-eshop-button">e-shop/výšivka</a>*/}
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default Vysivka;