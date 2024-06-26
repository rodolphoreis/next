const Title = (props: any) => {
  return props.pequeno ? (
    <>
      <p>Título: {props.principal}</p>
      <p>Subtítulo: {props.secundario}</p>
    </>
  ) : (
    <>
      <h1>Título: {props.principal}</h1>
      <h2>Subtítulo: {props.secundario}</h2>
    </>
  );
};

export default Title;
