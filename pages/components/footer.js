import Image from 'next/image'
import styles from './footer.module.css'
import Ahdai from '../../public/ahdai.png'



export default function Footer() {
    return (
      <div className={styles.container}>
        <div className={styles.footerDivider}></div>
        <div className={styles.footerWrapper}>
        <div>
        <Image
        src={Ahdai}
        alt="Picture of the author"
        width={42}
        height={42}
        />
        <div className={styles.footertitle} > Built with love for Ahdai</div>
        <div className={styles.copyright} > Copyright © 2014-present Charles</div>
        </div>

        <div className={styles.footerList}>
          <ul className={`${styles.footerList} ${styles.footertitle}`}>
            <li>
              <a href="#">Dribbble</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Wechat</a>
            </li>
          </ul>
        </div>
        </div>
        
      </div>
    )
  }
  