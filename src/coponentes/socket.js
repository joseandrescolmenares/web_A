import io from 'socket.io-client'
let socket = io("https://apisocketio.herokuapp.com/");

export default socket;