import React, { useState } from "react";
import s from "./css/editar.module.css";
import TextField from "@material-ui/core/TextField";
import socket from "./coponentes/socket";
import { useSelector, useDispatch } from "react-redux";
import { editarProducto, getProductos } from "./redux/actions";
export default function Editar({ id, title, descripcion, puntaje, precio }) {
  const [input, setInput] = useState({
    title: title,
    descripcion: descripcion,
    puntaje: puntaje,
    precio: precio,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(editarProducto(id, input));
   

    setTimeout(() => {
      dispatch(getProductos());
      socket.emit("mensaje", "CAMBIO");
    }, 1000);
  };

  return (
    <div className={s.containerForm}>
      <div className={s.form}>
        <div className={s.form}>
          <TextField
            label="Titulo"
            type="text"
            name="title"
            value={input.title}
            onChange={handleChange}
          />
        </div>
        <div className={s.form}>
          <TextField
            label="Descripcion"
            multiline
            maxRows={4}
            type="text"
            name="descripcion"
            value={input.descripcion}
            onChange={handleChange}
          />
        </div>
        <div className={s.form}>
          <TextField
            label="Puntaje"
            type="number"
            name="puntaje"
            value={input.puntaje}
            onChange={handleChange}
          />
        </div>
        <div className={s.form}>
          <TextField
            label="Precio"
            type="number"
            name="precio"
            value={input.precio}
            onChange={handleChange}
          />
        </div>
        <div className={s.botones}>
          <button className={s.boton} onClick={handleSave}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
