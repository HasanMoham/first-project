import React from 'react'
import Star from '../Star/Star'
import style from '../Home/Home.module.scss'

export default function About() {
  return (
    <>
    <div className={` text-center text-white  p-5 ${style.bgmain}`}>
      <div className="container">
      <h2 className='text-uppercase  fw-bolder fs-1'>about component</h2>
      <Star them='starlinewhite'/>
      <div className="row m-3">
      <div className=" col-md-6"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
      <div className=" col-md-6"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
      </div>
      </div>
    </div>
    </>
  )
}
