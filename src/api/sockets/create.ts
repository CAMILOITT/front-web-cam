import { io } from 'socket.io-client'

const url = import.meta.env.VITE_URL_SOCKETS || 'http://localhost:3000'

const socket = io(url, {
  transports: ['websocket'],
})

socket.connect()

export { socket }
