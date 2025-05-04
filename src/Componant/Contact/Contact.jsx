import React from 'react';
import style from './Contact.module.scss';
import Star from '../Star/Star';

export default function Contact() {
  return (
    <div className="container py-5">
      <div className={`text-center fw-bolder text-uppercase ${style.text}`}>
        <h2>Contact Section</h2>
        <Star them="starlinedark" />
      </div>

      <div className="w-75 mx-auto">
        <div className="row">
          <div className="col-12">
            
            <input
              type="text"
              className={`${style.input} m-3 p-3`}
              id="user"
              placeholder="Enter Username"
            />
          </div>

          <div className="col-12">
            
            <input
              type="number"
              className={`${style.input} m-3 p-3`}
              id="userAge"
              placeholder="Enter Age"
            />
          </div>

          <div className="col-12">
            
            <input
              type="email"
              className={`${style.input} m-3 p-3`}
              id="userEmail"
              placeholder="Enter Email"
            />
          </div>

          <div className="col-12">
           
            <input
              type="password"
              className={`${style.input} m-3 p-3`}
              id="userPassword"
              placeholder="Enter Password"
            />
          </div>

          <div className="col-12">
            <div className="p-3">
              <button className={`text-white ${style.buttom}`}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
