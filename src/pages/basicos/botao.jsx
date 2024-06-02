const Acao = () => {
  console.log("Apertei o botão");
};

const botao = () => {
  return (
    <div>
      <button onClick={Acao}>Click</button>
    </div>
  );
};

export default botao;
