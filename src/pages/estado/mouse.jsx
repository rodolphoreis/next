import { useState } from "react";

const mouse = () => {
  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
  };

  const [x, setX] = useState();
  const [y, setY] = useState();

  const MovendoMouse = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div style={estilo} onMouseMove={MovendoMouse}>
      <span>Eixo x: {x} </span>
      <span>Eixo y: {y}</span>
    </div>
  );
};

export default mouse;
