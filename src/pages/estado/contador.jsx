import { useState } from "react";

const contador = () => {
  const [numero, setNumero] = useState(0);

  const incremento = () => setNumero(numero + 1);

  const decremento = () => setNumero(numero - 1);

  return (
    <div>
      <h1>valor: {numero}</h1>
      <button onClick={incremento}>Somar + </button>
      <button onClick={decremento}> Subtrair - </button>
    </div>
  );
};

export default contador;
