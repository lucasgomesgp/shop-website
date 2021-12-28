import { FaShoppingBag, FaAlignRight } from "react-icons/fa";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>SHOP</div>
      <nav className={styles.menu}>
        <ul className={styles.menu_text}>
          <li>MY ACCOUNT</li>
          <li>SEARCH</li>
        </ul>
        <button className={styles.shopcart}>
          <FaShoppingBag size={25} />
        </button>
        <div className={styles.hamburguer_menu}>
          <FaAlignRight size={25} />
        </div>
      </nav>
    </header>
  );
}
