const stateInitial = {
   productos: []
  };
  
  
  
  function rootReducer(state = stateInitial, action) {
    switch (action.type) {

         case 'GET':
            return {
                ...state,
                productos: action.payload
            }

          case 'DELETE': return state
         
          case 'MODIFICAR': return state
      default:
        return state;
    }
}
  export default rootReducer;