import Vue from 'vue'
import BotUI from './../../node_modules/botui/build/botui.js'
import './../../node_modules/botui/build/botui.min.css'
import './../../node_modules/botui/build/botui-theme-default.css'

export default async function initBotApp () {
  let botui = BotUI('my-botui-app', {vue: Vue})
  let name = ''
  let isSingle = ''
  let age = ''
  Vue.component('bot-ui', {})
  await botui.message.add({content: 'Can you tell me your name?'})
  await botui.action.text({
    action: {
      placeholder: 'Enter your name here'
    }
  }).then(function (res) {
    console.log(res.value)
    name = res.value
  })

  await botui.message.add({content: 'Are you single?'})
  await botui.action.button({
    action: [
      {
        text: 'Yes',
        value: 'yes'
      }, {
        text: 'No',
        value: 'no'
      }
    ]
  }).then(function (res) {
    console.log(res.value)
    isSingle = res.value
  })

  await botui.message.add({content: 'How old are you?'})
  await botui.action.text({
    action: {
      placeholder: 'Enter your age here'
    }
  }).then(function (res) {
    console.log(res.value)
    age = res.value
  })

  await botui.message.add({loading: true, delay: 1000, content: `Name: ${name}`})
  botui.message.add({content: `Age: ${age}`})
  botui.message.add({content: `IsSingle: ${isSingle}`})
  botui.message.add({loading: true, delay: 1000, content: 'CHAT IS OVER!!!'})
}
