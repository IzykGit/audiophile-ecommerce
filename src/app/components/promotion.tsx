import React from 'react'
import styles from "../styles/components/promotion.module.css"
import Image from 'next/image'

import promotionImage from "../../../public/shared/desktop/image-best-gear.jpg"


const Promotion = () => {
  return (
    <section className={styles.promotionSection}>
        <div className={styles.promotionContainer}>
            
            <div className={styles.promotionText}>
                <p>BRINGING YOU THE <span style={{color: "#FBAF85"}}>BEST</span> AUDIO GEAR</p>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
                Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
    
            <Image src={promotionImage} alt="Man using headphones" className={styles.promotionImage}/>
            
        </div>
    </section>

  )
}

export default Promotion