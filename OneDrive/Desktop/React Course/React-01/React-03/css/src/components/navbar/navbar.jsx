import React from 'react'
import styles from './navbar.module.css'

const navbar = () => {
  return (
    <div className={styles.nav}>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar
