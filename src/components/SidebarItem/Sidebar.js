import React from "react";
import "./Sidebar.css";
import Image from 'react-bootstrap/Image';


export default function Sidebar() {
    return (
        <div className="sidebar container">
            <div className="sidebar-title">
                <h1>Young's favourite</h1>
            </div>
            <div className="sidebar row">
                <div className="sidebar col-6">
                <Image src={require('../img/Group 79.png')}  className="img-about" />
                </div>
                <div className="sidebar col-6">
                <Image src={require('../img/Group 80.png')}  className="img-about" />
                </div>
            </div>
       </div>
    )

}