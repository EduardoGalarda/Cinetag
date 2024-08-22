import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";
import HeaderLink from "../HeaderLink/HeaderLink.jsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={logo} alt="logo do cinetag" />
      </Link>

      <nav>
        <HeaderLink url="./"> Home </HeaderLink>
        <HeaderLink url="./Favoritos"> Favoritos </HeaderLink>
      </nav>
    </header>
  );
};

export default Header;
