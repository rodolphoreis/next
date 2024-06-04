import { useState } from "react";
import ContadorDisplay from "../../../components/ContadorDisplay";

const contador = () => {
  const [numero, setNumero] = useState(0);

  const incremento = () => setNumero(numero + 1);

  const decremento = () => setNumero(numero - 1);

  return (
    <div>
      <ContadorDisplay numero={numero} />

      <button onClick={incremento}>Somar + </button>
      <button onClick={decremento}> Subtrair - </button>
    </div>
  );
};

export default contador;
