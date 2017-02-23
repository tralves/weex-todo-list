// import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
  actions,
  mutations,

  state: {
    todos: {
      '110ec58a-a0f2-4ac4-8393-c866d813b8d5': {
        name: "buy groceries",
        active: true,
        done: false
      },
      '110ec58a-a0f2-4ac4-8393-c866d813b8d2': {
        name: "wake up",
        active: true,
        done: true
      },
      '110ec58a-a0f2-4ac4-8393-c866d813b8d3': {
        name: "wake up",
        active: false,
        done: true
      }
    },
    users: {}
  },

  getters: {
    // todos that should be currently displayed.
    // this Array may not be fully fetched.
    activeTodos (state, getters) {
      const { todos } = state

      return Object.keys(todos)
        .filter( key => {
          return todos[key].active
        })
        .reduce( (acc,key) => {
          acc[key] = todos[key];
          return acc
        }, {});
    }
  }
})

export default store
