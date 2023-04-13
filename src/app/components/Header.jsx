import Image from "next/image";
import styles from "../../styles/Header.module.css"

const Header = () => {
    return (
        <div className={styles.container}>
            <p>Billar</p>
            <button className={styles.mas}>
                <Image src={'/mas.png'} alt="mas" width={50} height={50} quality={100} />
            </button>
        </div>

    );
}

export default Header;