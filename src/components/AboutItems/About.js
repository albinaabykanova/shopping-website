import React from "react";
import "./About.css";
import Image from 'react-bootstrap/Image';

export default function About() {
    return (
        <div className="about container">
            <div className="about-title">
               <h1>New Arrivals</h1>
            </div>
            <div className="row about-row">
                <div className="col-4">
                    <Image src={require('../img/Frame 15.png')}  className="img-about" />
                </div>
                <div className="col-4">
                    <Image src={require('../img/Frame 16.png')}  className="img-about" />
                </div>
                <div className="col-4">
                    <Image src={require('../img/Frame 17.png')}  className="img-about" />
                </div>
            </div>
        </div>
    )
}