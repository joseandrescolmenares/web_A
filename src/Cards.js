import React, { useState } from "react";
import s from "./css/Cards.module.css";
import socket from "./coponentes/socket";
import { eliminarProducto, getProductos } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "@material-ui/core";
import Editar from "./editar";
export default function Cards({
  title,
  id,
  imagen,
  descripcion,
  precio,
  puntaje,
  cantidad,
}) {
  const [cierre, setCierre] = useState(false);

  const abrieCerrar = () => {
    setCierre(!cierre);
  };

  const dispatch = useDispatch();
  const deleteId = (id) => {
    dispatch(eliminarProducto(id));
    socket.emit("mensaje", "CAMBIO");
    setTimeout(() => {
      dispatch(getProductos());
    }, 1000);
  };

  return (
    <div className={s.contenedor_padre}>
      <div className={s.container}>
        <h1>{title}</h1>
        <img className={s.img} src={imagen} alt="imagen" />
        <h2>{id}</h2>
        <h3 className={s.h3}>{descripcion}</h3>
        <p> Puntaje : {puntaje}</p>
        <p> Precio: {precio}</p>
        <p> Cantidad :{cantidad}</p>
        <div className={s.botones}>
          <button onClick={abrieCerrar} className={s.boton}>
            Editar
          </button>
          <button className={s.boton} onClick={() => deleteId(id)}>Eliminar</button>
        </div>
      </div>
      <Modal className={s.modal} open={cierre} onClose={abrieCerrar}>
        <Editar
          id={id}
          title={title}
          puntaje={puntaje}
          precio={precio}
          descripcion={descripcion}
        />
      </Modal>
    </div>
  );
}
