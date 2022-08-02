
import { useEffect, useState } from "react";
import { getProductos } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Cards from "./Cards";
import s from './css/App.module.css'
import { Modal } from "@material-ui/core";
import Crear from "./Crear"
function App() {
  const dispatch = useDispatch();
  const produ = useSelector((state) => state.productos);
  const [cierre, setCierre] = useState(true);
  

  console.log(produ);
  useEffect(() => {
    dispatch(getProductos());
  }, []);

  return (
    <>{cierre? <Crear cierre={cierre} setCierre={setCierre}/> : 
    <div>
      <nav className={s.nav}>
        <button className={s.crear} onClick={() => setCierre(true)}>Crear</button>
         
      </nav>
      <>
        {produ.map((el) => ( 
          <Cards
            key={el._id}
            id={el._id}
            title={el.title}
            descripcion={el.descripcion}
            imagen={el.imagen}
            precio={el.precio}
            puntaje={el.puntaje}
            cantidad={el.cantidad}
            
          />
         
        
            ))}
        
      </>
 
      <footer className={s.footer}><h3>hecho por jose Andres Colmenares</h3></footer>
    </div>
    }</>
  );
}

export default App;
