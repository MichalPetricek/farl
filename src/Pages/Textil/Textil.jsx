import React from "react";
import "./Textil.css";
import brands1 from  "../../Images/Sluzby/Textil/textil-brands1.png";
import brands2 from  "../../Images/Sluzby/Textil/textil-brands2.png";
import { Helmet } from "react-helmet-async";

const Textil = () => {
    return(
        <div className="textil-page">
            <Helmet>
                <title>FARL textil</title>
                <meta name="description" content="Velkoobchod s více než 100 značek reklamního textilu." />
                <link rel="canonical" href="/textil"></link>
            </Helmet>
            <div className="textil-bg">
                <h1 className="textil-main">Textil</h1>
            </div>
            <div className="sluzby-text">
                <p><p className="sluzby-znak">-</p> Velkoobchod s více než 100 značek reklamního textilu: Malfini, Fruit of the Loom, Kariban, Russell, AWDis, Stedman, Sols, Gildan,
                 B&C, Result, Regatta, TeeJays, Anvil, Henbury, SF, Vossen, Bella, Just Hoods, Beechfield, Starworld, Promodoro a další.</p>
                <p><p className="sluzby-znak">-</p> Nabízíme také sportovní dresy a  pracovní oděvy na míru.</p>
                <p><p className="sluzby-znak">-</p> V případě objednávky textilu od nás, výrazná sleva na potisk, výšivku a další technologie.</p>
                <div className="sluzby-line"></div>
            </div>
            <div className="textil-brands-container">
                <div className="textil-brands-grid">
                    <img className="textil-brands-img" src={brands1} alt="" />
                    <img className="textil-brands-img" src={brands2} alt="" />
                </div>
            </div>
            <div className="sluzby-eshop">
                    <div className="sluzby-eshop-grid">
                        <h3 className="sluzby-eshop-text">Neváhejte objednat textil na našem eshopu.</h3>
                        <div>
                            <a href="https://www.shoptet.cz" className="sluzby-eshop-button">e-shop/textil</a>
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default Textil;