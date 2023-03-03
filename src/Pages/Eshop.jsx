import React from "react";
import { Helmet } from "react-helmet-async";

const Eshop = () => {
    const styles = {
        fontSize: '24px',
        height: "100vh"
      };
    return(
        <div className="uvod-page">
            <Helmet>
                <title>FARL eshop</title>
                <meta name="description" content="Naše společnost je zaměřena na komplexní služby v oblasti potisku a vyšívání textilu." />
                <link rel="canonical" href="/"></link>
            </Helmet>
            <div style={styles}>
                <h1 className="text-center" style={{paddingTop: "25%"}}>Eshop brzy spustíme</h1>
            </div>
        </div>
    );
}
export default Eshop;