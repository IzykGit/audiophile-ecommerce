import Image from "next/image";
import styles from "./styles/home.module.css"

import Navbar from "./components/navbar";
import Promotion from "./components/promotion";
import Footer from "./components/footer";
import Categories from "./components/categories";


import speakerZX9 from "../../public/home/desktop/image-speaker-zx9.png"
import speakerZX7 from "../../public/home/desktop/image-speaker-zx7.jpg"
import earphoneYX1 from "../../public/home/desktop/image-earphones-yx1.jpg"


export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div style={{width: "70%"}}>
          <Navbar />
        </div>
      </header>

      <main className={styles.main}>

        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>

            <p>NEW PRODUCT</p>
            <p>XX99 Mark II Headphones</p>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <button>SEE PRODUCT</button>

          </div>
        </section>


        {/* section for categories */}

        <Categories />


        {/* section for showcasing products */}


        <section className={styles.productShowcaseSection}>
          <div className={styles.productShowcaseContainer}>

            {/* product one section */}

            <div className={styles.productOne}>
              <Image src={speakerZX9} alt="ZX9 Speaker" className={styles.speakerZX9}/>

              <div className={styles.productOneInfo}>
                <p>ZX9 SPEAKER</p>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <button>SEE PRODUCT</button>
              </div>

            </div>


            {/* product two section */}
            
            <div className={styles.productTwoImage}>
              <Image src={speakerZX7} alt="ZX9 Speaker" className={styles.speakerZX7}/>
            </div>

            <div className={styles.productTwoInfo}>
                <div>
                  <p>ZX7 SPEAKER</p>
                  <button>SEE PRODUCT</button>
                </div>
            </div>


            {/* product three section */}

            <div className={styles.productThreeImage}>
              <Image src={earphoneYX1} alt="YX1 Earphones"/>
            </div>

            <div className={styles.productThreeInfo}>
              <div>
                <p>YX1 EARPHONES</p>
                <button>SEE PRODUCT</button>
              </div>
            </div>


          </div>
        </section>


        {/* promotion section of webpage */}

        <Promotion />

      </main>

      {/* footer section of the webpage */}

      <Footer />
    </>
  );
}
