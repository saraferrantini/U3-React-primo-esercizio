// creiamo il componente
// 1) FUNZIONE: un componente react può semplicemente essere una funzione che ritorna del jsx

let ButtonComponents = function () {
  return (
    <div>
      <button style={{ backgroundColor: "blue", color: "white", borderRadius: "5px", padding: "10px" }}>
        {" "}
        clicca qui
      </button>
    </div>
  );
};

//2) per rendere ButtonComponents visibile altrove bisogna esportarlo
export default ButtonComponents;

//3)ora il componente è esportato e disponibile anche altrove

// SPOSTARSI IN APP.JS dove-->
//4)IMPORTO  FIRST COMPONENT SU APP.JS
