import React from 'react'
import Image from 'next/image';

import styles from "../styles/components/categories.module.css"
import headphoneCategory from "../../../public/shared/desktop/image-category-thumbnail-headphones.png";
import speakerCategory from "../../../public/shared/desktop/image-category-thumbnail-speakers.png"
import earphoneCategory from "../../../public/shared/desktop/image-category-thumbnail-earphones.png"

import shopArrow from "../../../public/shared/desktop/icon-arrow-right.svg"


const Categories = () => {
  return (
    <section className={styles.categorySection}>
        <div className={styles.categoryContainer}>

            <div className={styles.headphones}>
              <Image src={headphoneCategory} alt="Headphone Category" className={styles.headphoneImage}/>
              <div>
                <p>HEADPHONES</p>
                <button className={styles.shopButton}>SHOP <Image src={shopArrow} alt='Arrow'/></button>
              </div>
            </div>

            <div className={styles.speakers}>
              <Image src={speakerCategory} alt="Speakers Category" className={styles.speakersImage}/>
                <div>
                  <p>SPEAKERS</p>
                  <button className={styles.shopButton}>SHOP <Image src={shopArrow} alt='Arrow'/></button>
                </div>
            </div>

            <div className={styles.earphones}>
              <Image src={earphoneCategory} alt="Earphone Category" className={styles.earphonesImage}/>
                <div>
                  <p>SPEAKERS</p>
                  <button className={styles.shopButton}>SHOP <Image src={shopArrow} alt='Arrow'/></button>
                </div>
            </div>

        </div>
  </section>
  )
}

export default Categories