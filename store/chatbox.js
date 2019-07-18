export const state = () => ({
    messages: [],
    channel: null
})

export const mutations = {
    add (state, message) {
        state.messages.push(message)
        state.channel = message.channel
    }
}

export const actions = {
    receive ({ commit }, message) {
        commit('add', message)
        //const todos = this.$axios.$get('https://jsonplaceholder.typicode.com/todos')
        //console.log(todos)
        //commit('add', todos)
    },
    send ({ commit}, message) {
        commit('add', message)
    }
}

export const getters = {
    messages: state => state.messages,
    channel: state => state.channel
}
