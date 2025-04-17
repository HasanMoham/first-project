import React from 'react'

import img1 from "../../assets/poert1.png"
import img2 from "../../assets/port2.png"
import img3 from "../../assets/port3.png"
import Popimg from '../PopImg/Popimg'
import Star from '../Star/Star'

export default function Protofolio() {
  const imges=[ img1,img2 ,img3 ,img1,img2 ,img3]
  return (
    <>
    <div className="container my-2 ">
      <div className="text-center"><h3 className='h1 fw-bold text-capitalize  '>portfolio component</h3> <Star them='starlinedark'/>
      </div>
      <div className="row g-4">
      {imges.map((img, index) => (
    <div className="col-lg-4 col-md-6 col-12" key={index}>
      <Popimg img={img} />
    </div>
  ))}
      </div>
       
    </div>
    

    </>
  )
}
