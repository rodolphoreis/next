import SeForVerdadeiro from "../../../components/SeForVerdadeiro";

const condicional2 = () => {
  const numero = 5;
  return (
    <div>
      <SeForVerdadeiro teste={numero % 2 === 0}>
        <h3>O número {numero} é par.</h3>
      </SeForVerdadeiro>
      <SeForVerdadeiro teste={numero % 1 === 0}>
        <h3>O número {numero} é ímpar.</h3>
      </SeForVerdadeiro>
    </div>
  );
};

export default condicional2;
