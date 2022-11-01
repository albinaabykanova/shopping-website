import React from "react";
import "./Header.css";
import Image from 'react-bootstrap/Image';
import { Col,row } from "react-bootstrap";


export default function Header() {
    return (
        <div className="header">
            <div className="row header-row containers">
                <div className="col-6">
                    <h1 className="header-title-1">Let's</h1>
                    <h1 className="header-title">Explore</h1>
                    <h1 className="header-title-2">Unique</h1>
                    <h1 className="header-title">Clothers.</h1>
                    <p className="header-description">Live for influential and Innovative fashion</p>
                    <Image src={require('../img/Vector 9.png')}  className="img1" />
                    <button className="header-btn">Shop Now</button>
                </div>
                <div className="col-6">
                    <Image src={require('../img/incendiary1.jpg')}  className="img" />
                </div>
             </div>
             <div className="row brand-look">
                <div className="col-2 brands">
                    <Image src={require('../img/Rectangle 36.png')}  className="img-brand" />
                </div>
                <div className="col-2 brands">
                    <Image src={require('../img/Rectangle 44.png')}  className="img-brand" />
                </div>
                <div className="col-2 brands">
                    <Image src={require('../img/Rectangle 38.png')}  className="img-brand" />
                </div>
                <div className="col-2 brands">
                    <Image src={require('../img/Rectangle 45.png')}  className="img-brand" />
                </div>
                <div className="col-2 brands">
                    <Image src={require('../img/Rectangle 43.png')}  className="img-brand" />
                </div>
                <div className="col-2 brands">
                    <Image src={require('../img/Rectangle 41.png')}  className="img-brand" />
                </div>
             </div>
        </div>    
    )
}