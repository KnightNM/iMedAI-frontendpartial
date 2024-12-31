// import Image from 'next/image'

// export default function Home() {
//   return (
//     <main></main>
//   )
// }

import Image from "next/image";
import styles from "./page.module.css";
import DoctorImage from "../public/bro.svg"
import Userimage from "/public/Group 9.svg"

export default function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.NavBar}>
        <div className={styles.Logo}>
          <p>iMed.<span className={styles.blueText}>ai</span></p>
        </div>
        <div className={`${styles.menu} ${styles.menuLarge}`}>
          <p>Home</p>
          <p>About Us</p>
          <p>Contact</p>
          <p>Product</p>
        </div>
        <div className={styles.buttonBox}>
        <Image src={Userimage} alt="Userimage"></Image>
        </div>
      </div>
      <div className={`${styles.menu} ${styles.menuSmall}`}>
          <p>Home</p>
          <p>About Us</p>
          <p>Contact</p>
          <p>Product</p>
        </div>
      <div className={styles.heroPage}>
        <div className={styles.heroLeft}>
          <div className={styles.topLine}>
          </div>
            <p className={styles.headingline}>About<span className={styles.blueText}>Us</span></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh ac libero tempus mattis. Nam sit amet erat risus. Pellentesque vulputate eros eu eros vehicula, quis mollis diam efficitur. Etiam consectetur iaculis nisl et lacinia. Donec lobortis
justo eget pellentesque malesuada.
vel rhoncus mauris congue et. Pellentesque
malesuada neque a arcu posuere, ac semper urna blandit. Ut venenatis, tellus ac elementum
elementum, arcu elit consequat erat, vel posuere
erat libero in velit.
Suspendisse turpis orci, sagittis sit amet congue eu, faucibus vel felis. Fusce finibus felis ut egestas dignissim. Curabitur fringilla enim et turois
dignissim, at vulputate lectus luctus. Fusce feugiat</p>
        </div>
        <div className={styles.heroRight}>
            <Image src={DoctorImage} alt="DoctorImage" className={styles.doctor}></Image>
        </div>
      </div>
    </div>
  );
}