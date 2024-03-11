//A)creiamo un componente con i superpoteri, un componente A CLASSE!

import { Component } from "react";
//B)questo Component è il più grande e generico componente React esistente, preso direttamente dalla libreria

class ClassComponent extends Component {
  //C)le props in un componente a classe sono sempre dentro un oggetto, raggiungibile da this.props
  render() {
    return (
      <div>
        <h3 className="my-h3">
          Vediamo come creare un Componente a FUNZIONE e un componenre a CLASSE! {this.props.saluto}
        </h3>
      </div>
    );
  }
}

// D) Per rendere ClassComponent visibile altrove bisogna esportarlo
export default ClassComponent;

// E) Mi sposto in app.js e importo
// F) Successivamente invoco la funzione <ClassComponent saluto="ciaone" />
