import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/pricing">Precio</NavLink>
        </li>
        <li>
          <NavLink to="/product">Producto</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Iniciar sesión
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
