import MainMenu from "@/components/home-page/main-menu";
import styles from "./page.module.css";
import TitleBillboard from "@/components/home-page/title-billboard";
import SilhouetteLayer from "@/components/home-page/silhouette-layer";
import DepartureBoard from "@/components/home-page/departure-board";
import SiteFooter from "@/components/home-page/site-footer";

function Home() {
  return (
    <div className={styles.heroScene}>
      {/* background / Midground layer */}

      <div className={styles.environmentLayer} aria-hidden="true">
        <TitleBillboard />
        <SilhouetteLayer />
      </div>

      {/* foreground / interactive */}
      <div className={styles.uiLayer}>
        <header className={styles.siteHeader}>
          <DepartureBoard />
        </header>

        <main className={styles.mainContent}>
          <nav aria-label="Menú principal">
            <MainMenu />
          </nav>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

export default Home;
