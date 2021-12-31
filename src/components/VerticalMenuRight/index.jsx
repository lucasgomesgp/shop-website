import { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaPlus , FaWindowMinimize } from "react-icons/fa";
import styles from "./styles.module.css";

export default function VerticalMenuRight() {
    const [quant, setQuant] = useState(1);
    function updateCart(type){
        if(type==="plus"){
            setQuant(quant + 1);
        }else{
            if(quant === 1){
                setQuant(1);
                alert("A quantidade mínima foi atingida!");
            }else{
                setQuant(quant - 1);
            }
        }
    }
    return (
        <main className={styles.central}>
            <section className={styles.center}>
                <h1 className={styles.title}>BRAND <br /> SWEATSHIRT</h1>
                <p className={styles.price}>$1000</p>
                <button className={styles.prevButton}>
                    <FaLongArrowAltLeft size={15}/>
                    <p>PREV</p>
                </button>
            </section>
            <section className={styles.left}>
                <button className={styles.nextButton}>
                    <p>NEXT</p>
                    <FaLongArrowAltRight size={15} />
                </button>
                <div className={styles.size}>
                    <button className={styles.buttonsSize}>S</button>
                    <button className={styles.buttonsSize}>M</button>
                    <button className={styles.buttonsSize}>L</button>
                </div>
                <div className={styles.display}>
                    <input type="text" value={quant} className={styles.inptQuant} />
                    <FaPlus onClick={() => updateCart("plus")}  className={styles.iconUp}/>
                    <FaWindowMinimize onClick={() => updateCart("down")}  className={styles.iconDown}/>
                </div>
                <div className={styles.addCart}>
                    <button className={styles.add}>ADD TO CART</button>
                </div>
            </section>
        </main>
    );
}
