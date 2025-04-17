import React from 'react'
import styles from './Home.module.scss'
import persona from '../../assets/avataaars.png'
import Star from '../Star/Star'

export default function Home () {
  return (
    <>

      <div className={`${styles.container}`}>
        <img src={persona} className={``} alt="" />
        <div className=""> <h3>start Framework</h3></div>
           <Star them='starlinewhite'/>
           <div className="text-white p-0 m-0"><p className='p-0 m-0'>Graphic Artist - Web Designer - Illustrator</p></div>
      </div>
    
    </>
  )
}
