import { io } from "socket.io-client"

const socket = io('https://back-web-cam-rfet-dev.fl0.io/', {
  transports: ['websocket'],
})

socket.connect()

export { socket }
