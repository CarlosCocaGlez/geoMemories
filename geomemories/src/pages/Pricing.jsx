// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Precios.
            <br />
            Por solo $99.99 al mes.
          </h2>
          <p>
            En Geo Memories, creemos que tus recuerdos no tienen precio,
            pero también queremos ofrecerte opciones que se adapten a tus
            necesidades. Explora nuestros planes flexibles diseñados para
            acompañarte en cada paso de tu viaje, desde un acceso gratuito con
            funciones esenciales hasta planes premium que te permiten disfrutar
            de características avanzadas como almacenamiento ampliado,
            opciones de personalización y mucho más. Elige el plan que mejor
            se ajuste a ti y comienza a construir tu mapa de memorias hoy mismo.
          </p>
        </div>
        <img src="vistaRascacielos.jpg" alt="Vista de una ciudad con rascacielos" />
      </section>
    </main>
  );
}
