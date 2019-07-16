export const state = () => ({
    list: []
})

export const mutations = {
    add (state, todos) {
        state.list.push(todos)
    }
}

export const actions = {
    fetch ({ commit }) {
        //const todos = this.$axios.$get('https://jsonplaceholder.typicode.com/todos')
        //console.log(todos)
        //commit('add', todos)
    }
}