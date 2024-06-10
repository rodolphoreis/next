interface PessoaProps {
  nome: string;
  idade: number;
}

const Pessoa = (props: PessoaProps) => {
  return (
    <div>
      <div>Nome: {props.nome}</div>
      <div>Idade: {props.idade}</div>
    </div>
  );
};

export default Pessoa;
