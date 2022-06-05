import styles from "./Home.module.css";
import savings from "../../Images/savings.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Falcon-manager</span>
      </h1>
      <p>gerencie melhor seus projetos</p>
      {/* <a href="/">Criar Projeto</a> */}
      <LinkButton to="/NewProject" text="Criar Projeto" />
      <img src={savings} alt="Manager" />
    </section>
  );
}
export default Home;
