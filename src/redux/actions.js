import axios from "axios";

export function getProductos(){
    return async function (dispatch) {
        try {
           let result = await axios.get('https://mongodbback.herokuapp.com/productos')
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
        
    await axios.delete(`https://mongodbback.herokuapp.com/productos/delete/${id}`)
      return dispatch({
        type: 'DELETE'
      })
    }
  }

  export function editarProducto(id, input){
    console.log(input.title)
    return async dispatch => {
        try {
   const update = await axios.put(`https://mongodbback.herokuapp.com/productos${id}`, input)
   return dispatch({
    type:'MODIFICAR'
   })
        }catch(err){console.log(err)}
    }
  }



