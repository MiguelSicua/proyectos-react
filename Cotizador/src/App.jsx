import React, {useState} from "react";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import "./App.css";
import Resultado from "./Components/resultado";
import Mensaje from "./Components/Mensaje";
import graft from "./Components/grafico";

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);
 
  let componente;
  if (total === 0) {
    componente = <Mensaje/>
    
  } else {
    componente = <Resultado total={total} cantidad={cantidad} plazo={plazo} />;
  }

  return (
    <>
      <Header titulo="Cotizador de Prestamos..."/>
      <div className="container">
        <Formulario 
        cantidad={cantidad} 
        setCantidad={setCantidad}
        plazo={plazo}
        setPlazo={setPlazo}
        setTotal={setTotal}
        />
      </div>
      <div className="mensaje">
        {componente}
      </div>
      <graft/>
    </>
  );
}

export default App
