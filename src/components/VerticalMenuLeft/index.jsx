import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import styles from "./styles.module.css";

export default function VerticalMenuLeft() {
  return (
    <nav className={styles.menu_left}>
        <ul className={styles.items_main}>
            <li>WOMEN</li>
            <li>MEN</li>
            <li>SHOES</li>
            <li>BRAND</li>
        </ul>
        <ul className={styles.icons}>
            <li>
                <FaInstagram size={35} />
            </li>
            <li>
                <FaTwitter size={35} />
            </li>
            <li>
                <FaFacebook size={35} />
            </li>
        </ul>
      </nav>
  );
}
