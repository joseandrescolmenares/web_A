import axios from "axios";

export function getProductos(){
    return async function (dispatch) {
        try {
           let result = await axios.get('http://localhost:9000/productos')
           console.log(result.data)
           return dispatch({
            type: "GET",
            payload: result.data
           })
           
        } catch(err){console.log(err)}
    }
}

export function eliminarProducto(id) {
    console.log(id)
    return async dispatch => {
        
    await axios.delete(`http://localhost:9000/productos/delete/${id}`)
      return dispatch({
        type: 'DELETE'
      })
    }
  }

  export function editarProducto(id, input){
    console.log(input.title)
    return async dispatch => {
        try {
   const update = await axios.put(`http://localhost:9000/productos/${id}`, input)
   return dispatch({
    type:'MODIFICAR'
   })
        }catch(err){console.log(err)}
    }
  }


export function PostProductos(input){
  console.log(input)
  return async dispatch => {
    try{
    let post = await axios.post('http://localhost:9000/productos/', input)
    return dispatch({
      type: 'POST'
    })
    }catch(err){console.log(err)}
  }
}
