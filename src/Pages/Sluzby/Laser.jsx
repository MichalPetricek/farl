import React from "react";
import "./Sluzby.css";
import 'react-multi-carousel/lib/styles.css';
import { Helmet } from "react-helmet-async";
import img1 from "../../Images/Sluzby/Carousel/laser/item1.png";
import img2 from "../../Images/Sluzby/Carousel/laser/item2.png";
import img3 from "../../Images/Sluzby/Carousel/laser/item3.png";
import img4 from "../../Images/Sluzby/Carousel/laser/item4.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Laser = () => {
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
                <title>FARL laser</title>
                <meta name="description" content="Gravírování a řezání textilu, kůže, plastu, dřeva, skla apod." />
                <link rel="canonical" href="/laser"></link>
            </Helmet>
            <div className="sluzby-bg">
                <h1 className="sluzby-main">Laser</h1>
            </div>
            <div className="sluzby-text">
                <p><p className="sluzby-znak">-</p> Gravírování a řezání textilu, kůže, plastu, dřeva, skla apod.</p>
                <div className="sluzby-line"></div>
            </div>
            <div className="sluzby-carousel-container">
                <h3 className="sluzby-produkty-text">naše produkty</h3>
                <Carousel showDots={false} responsive={responsive} ssr={true}>
                    <img className="sluzby-carousel-img" alt="img" src={img1}></img>
                    <img className="sluzby-carousel-img" alt="img" src={img2}></img>
                    <img className="sluzby-carousel-img" alt="img" src={img3}></img>
                    <img className="sluzby-carousel-img" alt="img" src={img4}></img>
                </Carousel>
            </div>
        </div>
    );
}
export default Laser;