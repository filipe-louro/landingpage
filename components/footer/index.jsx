import Link from "next/link";
import Image from "next/image";
import Logo from "/public/images/logo.svg";
import Facebook from "/public/images/icons/icon-awesome-facebook-f.svg";
import Instagram from "/public/images/icons/icon-awesome-instagram.svg";
import Linkedin from "/public/images/icons/icon-awesome-linkedin.svg";
import Youtube from "/public/images/icons/icon-awesome-youtube.svg";
import Styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={`${Styles.column} ${Styles.columnMain}`}>
        <Image src={Logo} alt="logo" />
        <h1 className={Styles.title}>0800 800 800</h1>
        <p>comercial@agencia.com.br</p>
      </div>
      <div className={Styles.column}>
        <h1>MENU</h1>
        <p>Quem somos</p>
        <p>Cases</p>
      </div>
      <div className={Styles.column}>
        <h1>CONTEÚDO</h1>
        <p>E-books</p>
        <p>Fórmulas prontas</p>
      </div>
      <div className={`${Styles.column} ${Styles.alignRight}`}>
        <h1>SOCIAL</h1>
        <div className={Styles.icons}>
          <Link href="/">
            <Image src={Instagram} alt="instagram" />
          </Link>
          <Link href="/">
            <Image src={Facebook} alt="facebook" />
          </Link>
          <Link href="/">
            <Image src={Linkedin} alt="linkedin" />
          </Link>
          <Link href="/">
            <Image src={Youtube} alt="youtube" />
          </Link>
        </div>
      </div>
      <div className={Styles.allRightsReserved}>
        ©2022 AGENCIA - Todos os direitos reservados.
      </div>
    </div>
  );
};

export default Footer;
