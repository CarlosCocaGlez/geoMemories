import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="/PersonaObservando.jpg"
          alt="Una persona viendo el paisaje de una ciudad"
        />
        <div>
          <h2>Acerca de Geomemories.</h2>
          <p>
            Geo Memories nació como una forma de convertir tus experiencias
            en recuerdos vivos. Nuestra aplicación te permite registrar los
            lugares que has visitado, agregar una breve descripción y revivir
            esos momentos únicos en cualquier momento. Ya sea que quieras
            recordar ese rincón especial en la montaña, el café acogedor donde
            pasaste una tarde inolvidable, o esa playa escondida que descubriste
            en tus vacaciones, Geo Memories es tu compañero ideal para
            capturar esos detalles que hacen que cada lugar sea único.
          </p>
          <p>
            Además, Geo Memories está diseñada pensando en la simplicidad y
            en lo intuitivo, permitiéndote crear y organizar tus recuerdos sin
            complicaciones. Con cada registro, no solo construyes un mapa
            personal de tus aventuras, sino que también creas una colección de
            momentos que puedes compartir con tus seres queridos o conservar
            como un tesoro personal. Geo Memories no es solo una app, es tu
            diario de viaje digital.
          </p>
        </div>
      </section>
    </main>
  );
}
