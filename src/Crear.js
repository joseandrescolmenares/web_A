import React, { useState, useEffect } from "react";
import { PostProductos, getProductos } from "./redux/actions";
import socket from "./coponentes/socket";
import s from "./css/Crear.module.css";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Crear = ({ setCierre }) => {
  const [input, setInput] = useState({
    title: "",
    imagen: "",
    descripcion: "",
    puntaje: "",
    cantidad: "",
    precio: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const hadleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostProductos(input));
    setTimeout(() => {
      socket.emit("mensaje", "nuevoProducto");
      dispatch(getProductos());
    }, 1000);

    setInput({
      title: "",
      imagen: "",
      descripcion: "",
      puntaje: "",
      cantidad: "",
      precio: "",
    });
  };

  return (
    <>
      <div className={s.container}>
        <form className={s.form} onSubmit={hadleSubmit}>
          <h1>Crea un Producto</h1>
          <div className={s.div}>
            <TextField
              type="text"
              label="Titulo"
              name="title"
              value={input.title}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </div>
          <div className={s.div}>
            <TextField
              type="url"
              label="Imagen URL"
              name="imagen"
              value={input.imagen}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </div>
          <div className={s.div}>
            <TextField
              type="text"
              label="Desacripcion"
              name="descripcion"
              value={input.descripcion}
              onChange={handleChange}
              multiline
              maxRows={2}
              variant="outlined"
              required
            />
          </div>
          <div className={s.div}>
            <TextField
              type="number"
              label="Puntaje"
              name="puntaje"
              value={input.puntaje}
              onChange={handleChange}
              variant="outlined"
              title='ssewew'
              required
            />
          </div>
          <div className={s.div}>
            <TextField
              type="number"
              label="Cantidad"
              name="cantidad"
              value={input.cantidad}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </div>
          <div className={s.div}>
            <TextField
              type="number"
              label="Precio"
              name="precio"
              value={input.precio}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </div>
          <div>
           <button className={s.botones}>Enviar</button>
            
            <Button onClick={() => setCierre(false)} variant="contained" color="primary">
              Volver
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Crear;
