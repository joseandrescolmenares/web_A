import React, { useState } from "react";
import s from "./css/Cards.module.css";
import socket from "./coponentes/socket";
import { eliminarProducto, getProductos } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from '@material-ui/core/Button';
import { Modal } from "@material-ui/core";
import Editar from "./editar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

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
  const classes = useStyles();
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
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={ () => deleteId(id)}
          ></Button>
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
