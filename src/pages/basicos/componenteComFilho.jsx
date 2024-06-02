import Item from "../../../components/Item";
import Lista from "../../../components/Lista";

const componenteComFilho = () => {
  return (
    <div>
      <Lista>
        <Item conteudo={"Bola"} />
        <Item conteudo={"camisa"} />
      </Lista>
    </div>
  );
};

export default componenteComFilho;
