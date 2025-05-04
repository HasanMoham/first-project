import React from 'react';
import style from './popimg.module.scss';

export default function Popimg({ img }) {
  return (
    <div className={style.wrapper}>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <img src={img} alt="Modal Preview" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Image Card */}
      <div className={style.card}>
        <button
          className="border-0 bg-white p-0 m-0"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalToggle"
          aria-label="Open image in modal"
        >
          <img src={img} alt="Thumbnail" className="w-100" />
        </button>
        <i className={`fa-solid fa-plus ${style.cardicon}`}></i>
      </div>
    </div>
  );
}
