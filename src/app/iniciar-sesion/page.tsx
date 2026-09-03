import Link from "next/link";

function LoginPage() {
  return (
    <main style={{ padding: "2rem", color: "var(--color-text)" }}>
      <h1>Iniciar sesión</h1>
      <h1>Correo electrónico o usuario</h1>
      <h1>Contraseña</h1>
      <p>Página en construcción</p>
      <Link href={"/"} style={{ color: "var(--color-brand" }}>
        Volver al menu
      </Link>
    </main>
  );
}

export default LoginPage;
