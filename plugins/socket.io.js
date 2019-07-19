import io from 'socket.io-client'

export default (store) => {
    const socket = io(process.env.SOCKET_HOST_URL || "http://localhost:9000")

    socket.on('answer', (message) => {
        store.commit('chatbox/add', message)
    })

    return socket
}
