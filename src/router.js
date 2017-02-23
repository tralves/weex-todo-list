// import Vue from 'vue'
import Router from 'vue-router'
import TodosView from './views/TodosView.vue'

Vue.use(Router)

// Story view factory
function createStoriesView (type) {
  return {
    name: `${type}-stories-view`,
    render (createElement) {
      return createElement(StoriesView, { props: { type }})
    }
  }
}

export default new Router({
  // mode: 'abstract',
  routes: [
    {
      path: '/todos',
      component: {
        name: 'todos-view',
        render (createElement) {
          return createElement(TodosView)
        }
      }
    },
    { path: '/', redirect: '/todos' }
  ]
})
