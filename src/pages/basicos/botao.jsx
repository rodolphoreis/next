const Acao = () => {
  console.log("Apertei o botão");
};

const botao = () => {
  const Acao2 = () => {
    console.log("Apertei o botão 2");
  };

  return (
    <div>
      <button onClick={Acao}>Click</button>
      <button onClick={Acao2}>Click 2</button>
    </div>
  );
};

export default botao;
