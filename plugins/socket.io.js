import io from 'socket.io-client'

export default (store) => {
    const socket = io(process.env.SOCKET_HOST_URL || "https://porfolio-bot.herokuapp.com:6666")

    socket.on('answer', (message) => {
        store.commit('chatbox/add', message)
    })

    return socket
}
