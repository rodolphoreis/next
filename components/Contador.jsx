import { Component } from "react";

export default class Contador extends Component {
  state = {
    numero: 7,
  };

  render() {
    <div>
      <h1>Componente feito com class</h1>;<h2>{this.props.valorInicial}</h2>
      <h2>{this.state.numero}</h2>
    </div>;
  }
}
