import styles from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";

function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>crie logo o seu projeto para depois adicionar serviços</p>
      <ProjectForm />
    </div>
  );
}
export default NewProject;
