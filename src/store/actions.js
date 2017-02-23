export function TOGGLE_TODO ({ commit, dispatch, state }, { id, done }) {
  commit('TOGGLE_TODO', { id, done })
}

export function ADD_TODO ({ commit, dispatch, state }, { name }) {
  commit('ADD_TODO', { name })
}
