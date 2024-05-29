const name = () => {
  const lista = ["Rodolpho", "Debora", "Thiago", "Filipe"];

  const render = () => {
    const listaNomes = lista.map((nome, i) => <li key={i}>{nome}</li>);
    return listaNomes;
  };

  return <ul>{render()}</ul>;
};

export default name;
