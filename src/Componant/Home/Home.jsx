import React from 'react';
import styles from './Home.module.scss';
import persona from '../../assets/avataaars.png';
import Star from '../Star/Star';

export default function Home() {
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center text-white text-center ${styles.homeContainer}`}>
      <img src={persona} className={styles.avatar} alt="Avatar" />
      <h3 className="mt-3">Start Framework</h3>
      <Star them="starlinewhite" />
      <p className="mt-3">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
