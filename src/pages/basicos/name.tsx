const name = () => {
  const lista = ["rodolpho", "Debora", "thiago"];

  const render = () => {
    const nome: any = [];
    for (let i = 0; i < lista.length; i++) {
      nome.push(<li key={i}>{lista[i]}</li>);
    }
    return nome;
  };

  return <ul>{render()}</ul>;
};

export default name;
