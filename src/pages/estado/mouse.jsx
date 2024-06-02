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

  return (
    <div style={estilo}>
      <span>Eixo x: </span>
      <span>Eixo y: </span>
    </div>
  );
};

export default mouse;
