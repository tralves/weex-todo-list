const uuidV4 = require('uuid/v4');

export function SET_TODOS (state, { todos }) {
  Vue.set(state, 'todos', todos)
}

export function TOGGLE_TODO (state, { id, done }) {
  state.todos[id].done = done
}

export function ADD_TODO (state, { name }) {
  Vue.set(state.todos, uuidV4(), { name, active: true, done: false })
}

export function SET_USER (state, { user }) {
  Vue.set(state.users, user.id, user)
}
