<template>
  <div class="header">
    <div class="title-menu" @click="jump('/')">
      <text class="title">todos</text>
    </div>
    <div class="nav">
      <text class="button" @click="openAddTodo()">+</text>
    </div>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')

  export default {
    methods: {
      openAddTodo (event) {
        modal.prompt({
          message: 'New todo item:'
        }, value => {
          if ( value.result === 'OK' && value.data.length > 0 ) {
            this.$store.dispatch('ADD_TODO', { name: value.data } )
          }
        })
      }
    }
  }
</script>

<style scoped>
  .header {
    position: relative;
    height: 120px;
    margin-bottom: 3px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #35495e;
    background-color: #42b983;
  }
  .title-menu {
    position: relative;
    width: 150px;
    height: 50px;
    top: 35px;
    left: 35px;
  }
  .title {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 32px;
    color: #FFFFFF;
  }
  .nav {
    display: flex;
    position: absolute;
    right: 35px;
    top: 20px;
    height: 80px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  .link {
    padding-left: 15px;
    padding-right: 15px;
  }

  .button {
    border-width: 2px;
    border-style: solid;
    border-color: #2c3e50;
    background-color: #35495e;
    height: 70px;
    width: 70px;
    line-height: 70px;
    padding: 0 20px;
    border-radius: 15px;
    line-height: 60px;
    color: white;
    text-align: center;
    font-family: Verdana, Geneva, sans-serif;
    font-size: 32px;
    color: #FFFFFF;
  }
</style>
