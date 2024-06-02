import Filho from "./Filho";

const Pai = () => {
  const FalarComigo = (param) => {
    console.log(param);
  };

  return (
    <div>
      <Filho funcao={FalarComigo} />
    </div>
  );
};

export default Pai;
