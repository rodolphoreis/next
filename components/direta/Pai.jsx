import Filho from "./Filho";

const Pai = () => {
  const nome = "Rafael";
  const sobreNome = "Santos";
  return (
    <div>
      <Filho familia={"Reis"} />
    </div>
  );
};

export default Pai;
