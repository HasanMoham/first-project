import React from 'react'
import style from './Contact.module.scss'
import Star from '../Star/Star'

export default function Contact() {
  return (
    <>
    <div className="container py-5 ">
      <div className={`text-center fw-bolder text-uppercase ${style.text} `}>
        <h2>conatct section</h2>
        <Star them='starlinedark'/>
      </div>
      <div className='w-75 mx-auto'>
              
                   <div className="">
                      <input type="text" className={`${style.input} m-3 p-3`} id="user" placeholder="Username" />
                  
                    
                    <input type="number" className={`${style.input } m-3 p-3`} id="user" placeholder="UserAge" />
                    
                    
                    <input type="email" className={`${style.input} m-3 p-3`} id="user" placeholder="UserEmail" />
                   
                    
                    <input type="password" className={`${style.input} m-3 p-3`} id="user" placeholder="UserPassword" />
                    
                    <div className="p-3">
                    <button className={` text-white ${style.buttom}`}>send message</button>
                    </div>
                    
                   </div>
                  
        </div>  
    </div>
      
 
    </>
  )
}
