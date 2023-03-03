import React from "react";
import "./Sluzby.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from "../../Images/Sluzby/Carousel/tisk/item1.png";
import img2 from "../../Images/Sluzby/Carousel/tisk/item2.png";
import img3 from "../../Images/Sluzby/Carousel/tisk/item3.png";
import img4 from "../../Images/Sluzby/Carousel/tisk/item4.png";
import img5 from "../../Images/Sluzby/Carousel/tisk/item5.png";
import img6 from "../../Images/Sluzby/Carousel/tisk/item6.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Tisk = () => {
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
    var link = <Link className="sluzby-kontakt" to="/kontakt">kontaktovat.</Link>;
    return(
        <div className="sluzby-page">
            <Helmet>
                <title>FARL tisk</title>
                <meta name="description" content="Vlastní výroba s kapacitou až 4000ks tisků denně." />
                <link rel="canonical" href="/tisk"></link>
            </Helmet>
            <div className="sluzby-bg">
                <h1 className="sluzby-main">Tisk</h1>
            </div>
            <div className="sluzby-text">
                <p><p className="sluzby-znak">-</p> Vlastní výroba s kapacitou až 4000ks tisků denně.</p>
                <p><p className="sluzby-znak">-</p> Optimalizace řešení a vhodné technologie.</p>
                <p><p className="sluzby-znak">-</p> Řešení pro e-shopy, možnost skladování tisků a okamžitého žehlení.</p>
                <p><p className="sluzby-znak">-</p> Výroba již od 1ks – nebojte se nás {link}</p>
                <div className="sluzby-line"></div>
            </div>
            <div className="sluzby-carousel-container">
                <h3 className="sluzby-produkty-text">naše produkty</h3>
                <Carousel showDots={false} responsive={responsive} ssr={true}>
                    <img className="sluzby-carousel-img" alt="img1" src={img6}></img>
                    <img className="sluzby-carousel-img" alt="img2" src={img2}></img>
                    <img className="sluzby-carousel-img" alt="img3" src={img1}></img>
                    <img className="sluzby-carousel-img" alt="img4" src={img3}></img>
                    <img className="sluzby-carousel-img" alt="img5" src={img5}></img>
                    <img className="sluzby-carousel-img" alt="img6" src={img4}></img>
                </Carousel>
            </div>
            <div className="sluzby-text">
                <h3 className="tisk-moznosti">Možnosti Tisku:</h3>
                    <p>Sítotisk přímý</p>
                    <p>Sítotisk transférový</p>
                    <p>Sublimační tisk</p>
                    <p>DTF a digitální tisk</p>
                    <p>UV tisk</p>
            </div>
            <div className="sluzby-eshop">
                    <div className="sluzby-eshop-grid">
                        <h3 className="sluzby-eshop-text">Neváhejte objednat vlastní potisk na našem eshopu.</h3>
                        <div>
                            <Link to={"../eshop"} className="sluzby-eshop-button">e-shop/tisk</Link>
                            {/*<a href="https://www.shoptet.cz" className="sluzby-eshop-button">e-shop/tisk</a>*/}
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default Tisk;