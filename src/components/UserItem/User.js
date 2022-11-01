import React from 'react';
import './User.css';

export default function User() {
  return (
    <div className="user">
        <div className="user-info">
            <div className="user-title">
                <h3 className="user-title">join shopping community to <br/> get montly promo </h3>
            </div>
            <p className="user-description">
                Type your email down below and be young wild generation
            </p>
        </div>
        <div className="user-form">
          <input type="text" className="EmailAddress" placeholder="Add your email here"/>
          <button type="submit" className="user-button">send</button>
       </div>
    </div>
  );
}