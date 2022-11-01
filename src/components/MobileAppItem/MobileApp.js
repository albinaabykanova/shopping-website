import React from 'react';
import './MobileApp.css';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function MobileApp() {
    return (
        <div className="mobile-app">
            <div className="row mobile-app-row">
                <div className="col-6">
                    <Image src={require('../img/woman.png')}  className="img-woman" />
                </div>
                <div className="col-6">
                    <h1 className="mobile-app-title">Payday</h1>
                    <h1 className='mobile-app-subtitle'>Sale Now</h1>
                    <p className="mobile-app-description">Spend minimal $100 get 30% off <br/> voucher code for
                              your next purchase<br/>
                    </p>
                    <dt className="mobile-app-description">1 June - 10 June 2021<br/></dt>
                    <p className="mobile-app-description" >*Terms & Conditions apply</p>
                    <Button className="btn-app">shop now</Button>
                </div>
               
            </div>
        </div>
    )
}