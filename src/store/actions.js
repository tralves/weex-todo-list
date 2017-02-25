const storage = weex.requireModule('storage');

export function TOGGLE_TODO ({ commit, dispatch, state }, { id, done }) {
  commit('TOGGLE_TODO', { id, done })

  storage.setItem('todos', JSON.stringify(state.todos))
}

export function ADD_TODO ({ commit, dispatch, state }, { name }) {
  commit('ADD_TODO', { name })

  storage.setItem('todos', JSON.stringify(state.todos))
}

export function LOAD_TODOS ({ commit, dispatch, state }) {
  storage.getItem('todos', todos => {
    todos = JSON.parse(todos.data) || {}
    commit('SET_TODOS', { todos })
  })
}