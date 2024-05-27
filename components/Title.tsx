const Title = (props: any) => {
  return (
    <>
      <h1>Título: {props.principal}</h1>
      <h2>Subtítulo: {props.secundario}</h2>
    </>
  );
};

export default Title;
