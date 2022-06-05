import { useEffect, useState } from "react";

import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then()((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <form className={styles.form}>
      <div>
        <Input
          type="text"
          text="Nome do Projeto"
          name="name"
          placeholder="Insira nome do projeto"
        />
      </div>
      <div>
        <Input
          type="number"
          text="Orcamento do Projeto"
          name="budget"
          placeholder="Insira orcamento total"
        />
      </div>
      <div>
        <Select
          name="category_id"
          text="Selecione a categoria"
          options={categories}
        />
      </div>
      <div>
        <SubmitButton text={btnText} />
      </div>
    </form>
  );
}
export default ProjectForm;
