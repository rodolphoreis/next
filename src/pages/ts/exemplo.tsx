import Pessoa from "../../../components/Pessoa";

const exemplo = () => {
  return (
    <div>
      <Pessoa nome={"João"} idade={15} />
      <br />
      <Pessoa nome={"João"} />
    </div>
  );
};

export default exemplo;
