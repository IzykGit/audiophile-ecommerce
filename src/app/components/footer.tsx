import React from 'react'
import styles from "../styles/components/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>

          <nav className={styles.navbar}>
            <h1 className={styles.title}>audiophile</h1>
            <ul className={styles.navLinks}>
                <li>HOME</li>
                <li>HEADPHONES</li>
                <li>SPEAKERS</li>
                <li>EARPHONES</li>
            </ul>
          </nav>

          <div className={styles.infoAndSocials}>
            <p>Audiophile is an all in one stop to fulfill your audio needs.
              {"We're"} a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we’re open 7 days a week.</p>
          </div>
        </div>
  </footer>
  )
}

export default Footer