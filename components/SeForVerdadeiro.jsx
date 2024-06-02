const SeForVerdadeiro = (props) => {
  if (props.teste) {
    return props.children;
  } else {
    return null;
  }
};

export default SeForVerdadeiro;
