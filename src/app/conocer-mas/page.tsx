import Link from "next/link";

function AboutPage() {
  return (
    <main style={{ padding: "2rem", color: "var(--color-text)" }}>
      <h1>Propósito</h1>
      <p>Página en construcción</p>
      <Link href={"/"} style={{ color: "var(--color-brand" }}>
        Volver al menu
      </Link>
    </main>
  );
}

export default AboutPage;
