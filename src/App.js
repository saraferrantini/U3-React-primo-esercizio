import logo from "./logo.svg";
import "./App.css";
//5)IMPORTO  FIRST COMPONENT (*FUNZIONE)
import ButtonComponents from "./components/ButtonComponents";
//6) INVOCO FirstComponent (*FUNZIONE)

//E)importo componente a classe (*classe)
import ClassComponent from "./components/ClassComponent";

// importo componente a classe per l'Img (*classe)
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*6) BUTTON  (*FUNZIONE)*/}
        <ButtonComponents />

        {/* F) CLASS-COMPONENT (*classe)*/}
        <ClassComponent />

        {/* CLASS-COMPONENT - IMG (*classe) */}
        <ImageComponent />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
