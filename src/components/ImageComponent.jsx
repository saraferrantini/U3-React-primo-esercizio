// creiamo un componente con i superpoteri, un componente A CLASSE!
import { Component } from "react";
// questo Component è il più grande e generico componente React esistente, preso direttamente dalla libreria

class ImageComponent extends Component {
  // le props in un componente a classe sono sempre dentro un oggetto, raggiungibile da this.props
  render() {
    return (
      <div>
        <img src="https://www.techmagic.co/blog/content/images/2023/05/cover-React.js.png" alt="" />
        {this.props.saluto}
      </div>
    );
  }
}

export default ImageComponent;
