import React from 'react'
import Styles from './Star.module.scss'

export default function Star({ them=''}) {
  return (
    <div className={`${Styles.starline} ${Styles[them] || ''}`}>
        <div className={`${Styles.line}`}></div>
        <div className={`${Styles.icon}`}><i className="fa-solid fa-star"></i></div>
        <div className={`${Styles.line}`}></div>
    </div>
  )
}
