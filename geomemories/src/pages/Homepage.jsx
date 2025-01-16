import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {

  return (
    <main className={styles.homepage}>
        <PageNav/>
        <video src="/loading.mp4" autoPlay loop={ true } muted />
        <section>
            <h1>
                Tus memorias en un mapa.
                <br/>
                Geomemories te permite recordar tus viajes.
            </h1>
            <h2>
                Un mapa mundial que rastrea tus pasos en cada ciudad que puedas
                imaginar. Nunca olvides tus maravillosas experiencias, y muestra a
                tus amigos cómo has deambulado por el mundo.
            </h2>
            <Link to="/login" className="cta">
                Comienza a rastrear ahora
            </Link>
        </section>
    </main>
  );
}
