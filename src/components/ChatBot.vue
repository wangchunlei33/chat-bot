<template>
  <div class="chat-bot">
    <h3>{{ helloText }}</h3>
    <div class="botui-app-container" id="my-botui-app">
      <bot-ui></bot-ui>
    </div>
  </div>
</template>
<script>
import initBotApp from './../utils/init-botui'

export default {
  name: 'ChatBot',
  data () {
    return {
      helloText: 'Hello, welcome to ChatBot App!'
    }
  },
  mounted () {
    initBotApp()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chat-bot {
  .botui-app-container {
    text-align: left;
  }
}
</style>
