import React from "react";
import style from './Footer.module.scss'

export default function Footer() {
  return (
    <>
      <div className={`${style.footer} container-fluid`}>
        <div className="row">
          <div className="col-12 col-md-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-12 col-md-4">
            <div>
              <h3>AROUND THE WEB</h3>
              <div className="icons">
                <i className="fa-brands fa-facebook m-2 rounded-circle p-2 border border-white"></i>
                <i className="fa-brands fa-twitter m-2 rounded-circle p-2 border border-white"></i>
                <i className="fa-brands fa-linkedin-in m-2 rounded-circle p-2 border border-white"></i>
                <i className="fa-solid fa-globe m-2 rounded-circle p-2 border border-white"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 text-center">
            <div className="card-body">
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free-to-use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.copy}>
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
