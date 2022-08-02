import axios from "axios";

export function getProductos(){
    return async function (dispatch) {
        try {
           let result = await axios.get('https://mongodbback.herokuapp.com')
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
        
    await axios.delete(`https://mongodbback.herokuapp.com/delete/${id}`)
      return dispatch({
        type: 'DELETE'
      })
    }
  }

  export function editarProducto(id, input){
    console.log(input.title)
    return async dispatch => {
        try {
   const update = await axios.put(`https://mongodbback.herokuapp.com/${id}`, input)
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
    let post = await axios.post('https://mongodbback.herokuapp.com', input)
    return dispatch({
      type: 'POST'
    })
    }catch(err){console.log(err)}
  }
}
