import React from 'react'
import Image from 'next/image'
import styles from "../styles/components/footer.module.css"

import facebook from "../../../public/shared/desktop/icon-facebook.svg"
import instagram from "../../../public/shared/desktop/icon-instagram.svg"
import twitter from "../../../public/shared/desktop/icon-twitter.svg"

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

              <div>
                <Image src={facebook} alt={"Visit out facebook!"}/>
                <Image src={instagram} alt={"Visit out facebook!"}/>
                <Image src={twitter} alt={"Visit out facebook!"}/>
              </div>
          </div>
          <p className={styles.copyright}>Copyright 2021. All Rights Reserved</p>
        </div>
  </footer>
  )
}

export default Footer