import React from "react";
import "./Kontakt.css";
import {ImLocation} from "react-icons/im";
import {BiPhone} from "react-icons/bi";
import{GoMail} from "react-icons/go";
import {RiBillLine} from "react-icons/ri";
import { Helmet } from "react-helmet-async";

const Kontakt = () => {
    return(
        <div className="kontakt-page">
            <Helmet>
                <title>FARL kontakt</title>
                <meta name="description" content="Neváhejte nás kontaktovat." />
                <link rel="canonical" href="/kontakt"></link>
            </Helmet>
            <div className="kontakt-background">
                <div className="kontaktgrid1-container">
                    <div className="kontaktgrid1-item">
                        <ImLocation className="kontaktgrid1-logo"></ImLocation>
                        <h5 className="kontaktgrid1-main"><h3 className="kontaktgrid1-znak">-</h3> Sídlo <h3 className="kontaktgrid1-znak">-</h3></h5>
                        <div className="kontaktgrid1-text">Lužická 3364/2, 466 01 Jablonec nad Nisou</div>
                    </div>
                    <div className="kontaktgrid1-item">
                        <BiPhone className="kontaktgrid1-logo"></BiPhone>
                        <h5 className="kontaktgrid1-main"><h3 className="kontaktgrid1-znak">-</h3> Telefon <h3 className="kontaktgrid1-znak">-</h3></h5>
                        <a href="tel:+420608310164" className="kontaktgrid1-text" id="kontaktgrid1-text-href">+420 608 310 164</a>
                    </div>
                    <div className="kontaktgrid1-item">
                        <GoMail className="kontaktgrid1-logo"></GoMail>
                        <h5 className="kontaktgrid1-main"><h3 className="kontaktgrid1-znak">-</h3> Email <h3 className="kontaktgrid1-znak">-</h3></h5>
                        <div>
                            <a href = "mailto: obchod@farl.cz" id="kontaktgrid1-text-href" className="kontaktgrid1-text">obchod@farl.cz</a>
                        </div>
                        <div>
                            <a href = "mailto: michal.grabar@farl.cz" id="kontaktgrid1-text-href" className="kontaktgrid1-text">michal.grabar@farl.cz</a>
                        </div>
                        <div>
                            <a href = "mailto: info@farl.cz" id="kontaktgrid1-text-href" className="kontaktgrid1-text">info@farl.cz</a>
                        </div>
                    </div>
                    <div className="kontaktgrid1-item">
                        <RiBillLine className="kontaktgrid1-logo"></RiBillLine>
                        <h5 className="kontaktgrid1-main"><h3 className="kontaktgrid1-znak">-</h3> Fakturační údaje <h3 className="kontaktgrid1-znak">-</h3></h5>
                        <div id="kontaktgrid1-ico">
                            <div className="kontaktgrid1-text">Druzcov 124, 463 52, Osečná</div>
                            <div className="kontaktgrid1-text">IČO: 25412922</div>
                            <div className="kontaktgrid1-text">DIČ: CZ25412922</div>
                        </div> 
                    </div>
                </div>
                <div className="kontakt-container-map">
                <iframe className="kontakt-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.8872183191206!2d15.154849915741213!3d50.7220314795137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ecada2fe5c6e5%3A0x4240fc2bfffdab33!2sFarl%2C%20S.r.o.!5e0!3m2!1scs!2scz!4v1676451953641!5m2!1scs!2scz"  
                loading="lazy" 
                allowFullScreen="yes"
                title="mapa"
                referrerpolicy="no-referrer-when-downgrade">  
                </iframe>
                </div>
            </div>
        </div>
    );
}
export default Kontakt;