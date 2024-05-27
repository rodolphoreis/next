import { type } from "os";
import { useState } from "react";

const segundo = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nome
          <input
            type="text"
            value={name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default segundo;
