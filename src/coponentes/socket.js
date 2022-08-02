import io from 'socket.io-client'
let socket = io("https://mongodbback.herokuapp.com");

export default socket;