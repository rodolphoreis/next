import { useState } from "react";

const formulario = () => {
  const [valor, setValor] = useState("");
  return (
    <div>
      <input
        type="text"
        value={valor}
        name="valor"
        onChange={(e) => setValor(e.target.value)}
        placeholder="Digite aqui"
      />
      <p>{valor}</p>
    </div>
  );
};

export default formulario;
