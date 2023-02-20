import React from "react";
import "./Sluzby.css";
import 'react-multi-carousel/lib/styles.css';
import { Helmet } from "react-helmet-async";

const Laser = () => {
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
        </div>
    );
}
export default Laser;