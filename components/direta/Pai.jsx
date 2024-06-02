import Filho from "./Filho";

const Pai = () => {
  const nome = "Rafael";
  const sobreNome = "Santos";
  return (
    <div>
      <Filho nome={nome} familia={sobreNome} />
    </div>
  );
};

export default Pai;
