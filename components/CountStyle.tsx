import React from "react";

const CountStyle = (props: React.CSSProperties) => {
  return (
    <div>
      <h2
        style={{ color: props.color, backgroundColor: props.backgroundColor }}
      >
        Count
      </h2>
    </div>
  );
};

export default CountStyle;
