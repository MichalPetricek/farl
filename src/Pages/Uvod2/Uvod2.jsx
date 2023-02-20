import React from "react";
import "./Uvod2.css";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Card} from "react-bootstrap";
import EshopImg from "../../Images/uvod/eshop-uvod2.png";
import VysivkaImg from "../../Images/uvod/vysivka-uvod.png";
import TiskImg from "../../Images/uvod/tisk-uvod.png";
import TextilImg from "../../Images/uvod/textil-uvod.png";
import LaserImg from "../../Images/uvod/laser-uvod.png";
import { Helmet } from 'react-helmet-async';

const Uvod2 = () => {
    return(
        
        <div className="uvod2-page">
            <Helmet>
                <title>FARL úvod</title>
                <meta name="description" content="Naše společnost je zaměřena na komplexní služby v oblasti potisku a vyšívání textilu." />
                <link rel="canonical" href="/black"></link>
            </Helmet>
            <div className="uvod2-background">
                <div className="uvodgrid1-container">
                    <div className="uvodgrid1-item uvodgrid11">
                        <a href="https://www.shoptet.cz/">
                            <Card className="uvodgrid1-card">
                                <img className="uvodgrid1-img" src={EshopImg} alt="e-shop" />
                                <h3 className="uvod2grid1-text"><text className="uvodgrid1-znak">-</text> E-shop <text className="uvodgrid1-znak">-</text></h3>
                            </Card>
                        </a>
                    </div>
                    <div className="uvodgrid1-item uvodgrid12">
                        <Link to={"./vysivka"}>  
                            <Card className="uvodgrid1-card">
                                <img className="uvodgrid1-img" src={VysivkaImg} alt="vysivka" />
                                <h3 className="uvod2grid1-text"><text className="uvodgrid1-znak">-</text> Výšivka <text className="uvodgrid1-znak">-</text></h3>
                            </Card>
                        </Link> 
                    </div>
                    <div className="uvodgrid1-item uvodgrid13">
                        <Link to={"./tisk"}>  
                            <Card className="uvodgrid1-card">
                                <img className="uvodgrid1-img" src={TiskImg} alt="tisk" />
                                <h3 className="uvod2grid1-text"><text className="uvodgrid1-znak">-</text> Tisk <text className="uvodgrid1-znak">-</text></h3>
                            </Card>
                        </Link> 
                    </div>
                    <div className="uvodgrid1-item uvodgrid14">
                        <Link to={"./textil"}>  
                            <Card className="uvodgrid1-card">
                                <img className="uvodgrid1-img" src={TextilImg} alt="textil" />
                                <h3 className="uvod2grid1-text"><text className="uvodgrid1-znak">-</text> Textil <text className="uvodgrid1-znak">-</text></h3>
                            </Card>
                        </Link> 
                    </div>
                    <div className="uvodgrid1-item uvodgrid15">
                        <Link to={"./laser"}>  
                            <Card className="uvodgrid1-card">
                                <img className="uvodgrid1-img" src={LaserImg} alt="laser" />
                                <h3 className="uvod2grid1-text"><text className="uvodgrid1-znak">-</text> Laser <text className="uvodgrid1-znak">-</text></h3>
                            </Card>
                        </Link> 
                    </div>
                </div>
            </div>
            
            <div className="uvod2-container-text">
                <h1 className="uvod2-main-farl">FARL s.r.o</h1>
                <p className="uvod-text1"><text className="uvod-text-znak">-</text> Naše společnost je zaměřena na komplexní služby v oblasti potisku a vyšívání textilu.</p>
                <p className="uvod-text1"><text className="uvod-text-znak">-</text> Navrhneme optimální řešení bez ohledu na zvolený textil, logo či množství.</p>
                <p className="uvod-text1"><text className="uvod-text-znak">-</text> Máme vlastní výrobu a 10 let zkušeností.</p>
                <p className="uvod-text1"><text className="uvod-text-znak">-</text> Realizace od 1ks po mnohatisícové zakázky.</p>
                <p className="uvod-text1"><text className="uvod-text-znak">-</text> Nejste si jisti jakou technologii zvolit? Máme řešení a rádi doporučíme.</p>
                <p className="uvod-text1"><text className="uvod-text-znak">-</text> Vše na jednom místě - sítotisk, výšivka, sublimace, sítotiskový transfer, DTF tisky, UV tisk, laser, řezaná reklama a další služby.</p>
            </div>
        </div>
    );
}
export default Uvod2;