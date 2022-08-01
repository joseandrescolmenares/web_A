
import { useEffect } from "react";
import { getProductos } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Cards from "./Cards";
import s from './css/App.module.css'
function App() {
  const dispatch = useDispatch();
  const produ = useSelector((state) => state.productos);
  // useEffect(() => {
  //   socket.emit("mensaje", "CAMBIO");
  // }, []);
  console.log(produ);
  useEffect(() => {
    dispatch(getProductos());
  }, []);

  return (
    <div>
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
  );
}

export default App;
