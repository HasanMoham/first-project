import React from 'react'
import style from './popimg.module.scss'
export default function Popimg(props) {
    const {img} =props;
  return (
    <>
       <div>
          <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
              <img src={img} className='' alt="" />
               
              </div>
            </div>
          </div>
          <div className={`${style.card}`}>
          <button className='border-0 bg-white p-0 m-0'data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><img src={img} className='w-100' alt="" /></button>
          <i className={`fa-solid fa-plus ${style.cardicon}`}></i>
          </div>
          
        </div>
    </>
  )
}
