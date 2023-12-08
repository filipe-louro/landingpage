import Image from "next/image";
import Styles from "./welcome.module.scss";
import Button from "../button";
import BannerWelcome from "/public/images/leads.svg";

const Welcome = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.text}>
        <h1>Melhor agência de marketing do bairro</h1>
        <p>
          Somos uma agência de performance digital, aceleramos vendas e
          aquisição de leads para grandes marcas.
        </p>
        <Button title="Aumentar vendas" kind="secundary" />
      </div>
      <div className={Styles.image}>
        <Image src={BannerWelcome} alt="banner" />
      </div>
    </div>
  );
};

export default Welcome;
