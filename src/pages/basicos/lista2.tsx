import { Span } from "next/dist/trace";

const lista2 = () => {
  const lista = [];
  for (let i = 0; i <= 29; i++) {
    lista.push(<span key={i}>{i},</span>);
  }

  return <div>{lista}</div>;
};

export default lista2;
