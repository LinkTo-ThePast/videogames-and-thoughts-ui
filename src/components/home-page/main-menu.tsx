import Link from "next/link";
import styles from "./main-menu.module.css";

function MainMenu() {
  return (
    <ul className={styles.menuList}>
      {/** MAIN MENU  */}
      <li className={styles.menuLink}>
        <Link href={"/iniciar-sesion"}>INICIAR SESIÓN</Link>
      </li>
      <li className={styles.menuLink}>
        <Link href={"/comenzar-rehabilitacion"}>COMENZAR REHABILITACIÓN</Link>
      </li>
      <li className={styles.menuLink}>
        <Link href={"/conocer-mas"}>ACERCA DE</Link>
      </li>
    </ul>
  );
}

export default MainMenu;
