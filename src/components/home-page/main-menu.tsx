import Link from "next/link";

function MainMenu() {
  return (
    <ul>
      {/** MAIN MENU  */}
      <li>
        <Link href={"/iniciar-sesion"}>
        INICIAR SESIÓN
      </Link>
      </li>
      <li>
        <Link href={"/comenzar-rehabilitacion"}>
        COMENZAR REHABILITACIÓN
      </Link>
      </li>
      <li>
        <Link href={"/conocer-mas"}>
        ACERCA DE
      </Link>
      </li>
    </ul>
  );
}

export default MainMenu;
