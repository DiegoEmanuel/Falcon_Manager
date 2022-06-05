function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="insira o nome do projeto" />
      </div>
      <div>
        <input placeholder="insira o orcamento" type="number" />
      </div>
      <div>
        <select name="category_id">
          <option disabled selected>
            Selecione a categoria
          </option>
        </select>
      </div>
      <div>
        <input type="submit" value="criar projeto" />
      </div>
    </form>
  );
}
export default ProjectForm;
