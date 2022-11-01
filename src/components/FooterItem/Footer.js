import React from "react";
import "./Footer.css";

import { FaFacebookF,FaInstagramSquare,FaTwitter,FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-info row">
                <div className="footer-item col-3">
                    <h1 className="footer-title">Fashion</h1>
                    <p className="footer-info-description">
                        Complete your style with awesome <br/> clothes from us.
                    </p>
                <div className="d-flex">
                <div className="icon-footer">
                    <FaFacebookF size={20} color="#454545"/>
                </div>
                <div className="icon-footer">   
                    <FaInstagramSquare size={20} color="#454545"/>
                </div>
                <div className="icon-footer">
                    <FaTwitter size={20} color="#454545" />
                </div>
                <div className="icon-footer">
                    <FaLinkedinIn size={20} color="#454545" />
                </div>
                </div>
                </div>
                <div className="footer-info-item col-3">
                    <h6 className="footer-info-title">Company</h6>
                    <p className="footer-info-description">About</p>
                    <p className="footer-info-description">Contact Us</p>
                    <p className="footer-info-description">Support</p>
                    <p className="footer-info-description">Careers</p>
                </div>
                <div className="footer-info-item col-3">
                    <h6 className="footer-info-title">Quick Link</h6>
                    <p className="footer-info-description">Share Location</p>
                    <p className="footer-info-description">Orders Tracking</p>
                    <p className="footer-info-description">Size Guide</p>
                    <p className="footer-info-description">FAQs</p>
                </div>
                <div className="footer-info-item col-3">
                    <h6 className="footer-info-title">Legal</h6>
                    <p className="footer-info-description">Tems & conditions</p>
                    <p className="footer-info-description">Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}
