<template>
  <div class="cell-item">
    <text class="todo-name" ref="name" :style="textStyle">{{todo.name}}</text>
    <text class="toggle" :style="buttonStyle" @click="toggleDone">{{ isDone }}</text>
<!--     <switch :checked="todo.done" @click="toggleDone"></switch> -->
  </div>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      },
      todoId: {
        type: String,
        required: true
      }
    },
    computed: {
      isDone () {
        return this.todo.done ? "undo..." : "done!"
      },
      buttonStyle () {
        if (this.todo.done) {
          return {
            'color': '#a0a0a0',
            'backgroundColor': 'white',
            'borderColor': 'white',
            'textDecoration': 'underline'
          }
        }
        else return {
            'color': 'white',
            'backgroundColor': '#35495e',
            'borderColor': '#2c3e50',
            'textDecoration': 'none'
          }
      },
      textStyle () {
        if (this.todo.done) {
          return {
            'textDecoration': 'line-through',
            'fontStyle': 'italic',
            'color': '#a0a0a0'
          }
        }
        else return {
            'textDecoration': 'none',
            'fontStyle': 'normal',
            'color': '#404040'
          }
      }

    },
    methods: {
      toggleDone () {
        this.done = !this.done
        this.$store.dispatch('TOGGLE_TODO', { id: this.todoId, done: this.done} )
      }
    }
  }
</script>

<style scoped>
  .cell-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    position: relative;
    padding-top: 20px;
    padding-bottom: 25px;
    padding-left: 50px;
    padding-right: 40px;
  }
  .todo-name {
    font-size: 33px;
    color: #404040;
    line-height: 62px;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
    margin-right: 20px;
  }
  .todo-name.done {
    text-decoration: line-through;
    font-style: italic;
    color: #a0a0a0;
  }
/*  .toggle-wrapper {
    min-width: 110px;
    right: 0px;
  }*/
  .toggle {
    border-width: 2px;
    border-style: solid;
    border-color: #2c3e50;
    background-color: #35495e;
    height: 70px;
    width: 170px;
    line-height: 70px;
    padding: 0 20px;
    border-radius: 15px;
    line-height: 60px;
    color: white;
    text-align: center;
    right: 0px;
    font-family: Verdana, Geneva, sans-serif;
    font-size: 32px;
  }
  .toggle.done {
    color: #a0a0a0;
    background-color: white;
    border: none;
    text-decoration: underline;
  }
</style>
