const Filho = (props) => {
  return (
    <div>
      <h1>Filho</h1>
      <button onClick={() => props.funcao("Passei no ENEM")}>
        Falou com o Pai
      </button>
    </div>
  );
};

export default Filho;
