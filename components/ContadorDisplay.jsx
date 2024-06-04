import React from "react";

const ContadorDisplay = (props) => {
  return (
    <div
      style={{
        height: "20px",
        width: "100px",
        borderRadius: "100px",
        backgroundColor: "#222",
        color: "#fff",
        justifyContent: "center",
        padding: "20px",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      Valor : {props.numero}
    </div>
  );
};

export default ContadorDisplay;
