const SomentePar = (props) => {
  const numeroPar = props.numero % 2 === 0;

  return numeroPar ? <span>{props.numero}</span> : null;
};

export default SomentePar;
