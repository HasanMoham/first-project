import React from "react";
import style from './Footer.module.scss'

export default function Footer() {
  return (
    <>
      <div className={`${style.footer}  container-fluid  `}>
        <div className="row">
          <div className="col-4   ">
            <h3>LOCATION</h3>
            <p _ngcontent-bbb-c21="">2215 John Daniel Drive</p>
            <p _ngcontent-bbb-c21="">Clark, MO 65243</p>
          </div>
          <div className="col-4   ">
            <div class="">
              <h3>AROUND THE WEB</h3>
              <div class="icons">
                <i className="fa-brands fa-facebook m-2 rounded-circle p-2 border border-white  "></i>
                <i class="fa-brands fa-twitter m-2  rounded-circle p-2 border border-white  "></i>
                <i class="fa-brands fa-linkedin-in m-2  rounded-circle p-2 border border-white  "></i>
                <i class="fa-solid fa-globe m-2  rounded-circle p-2 border border-white  "></i>
              </div>
            </div>
          </div>
          <div className="col-4  text-center">
            <div _ngcontent-bbb-c21="" class="card-body text-center">
              <h3 _ngcontent-bbb-c21="">ABOUT FREELANCER</h3>
              <p _ngcontent-bbb-c21="">
                {" "}
                Freelance is a free to use, licensed Bootstrap theme created by
                Route{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.copy} `}>
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
