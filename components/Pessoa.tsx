const Pessoa = (props: any) => {
  return (
    <div>
      <div>Nome: {props.nome}</div>
      <div>Idade: {props.idade}</div>
    </div>
  );
};

export default Pessoa;
