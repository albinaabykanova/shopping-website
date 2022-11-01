import React from 'react';
import './View.css';
import Image from 'react-bootstrap/Image';


export default function View() {
     return (
            <div className="view container">
                <div className="row view-row">
                    <div className="col-6 view-1">
                        <div>
                            <h1 className="view-title">DOWNLOAD APP & <br />  GET THE VOUCHER!</h1>
                        </div>
                        <div className="view-text">
                            <p>Get 30% off for first transaction using.<br/> Rondovision mobile app for now. </p>
                        </div>
                        <div className="foto-view">
                            <div>
                                 <Image src={require('../img/Rectangle 18.png')} className="img-view1"  />
                            </div>
                            <div>
                                <Image src={require('../img/Rectangle 55.png')} className="img-view2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="img-view3">
                             <Image src={require('../img/Mobile.png')} className="img-view3" />
                        </div>
                    </div>
                </div>
            </div>
     )
}