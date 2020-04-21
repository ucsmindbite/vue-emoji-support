# Vue Chat Emoji
A simple chat emoji for vue

## Installation
```
npm install vue-chat-emoji
```

## Usage
using inside component
```vue
<template>
  <div id="app">
    <Emoji />
  </div>
</template>

<script>
import Emoji from 'vue-chat-emoji'
export default {
  components: {
    Emoji
  }
}
</script>
```
using globally
```js
import Vue from "vue";
import App from "./App.vue";
 
import Emoji from 'vue-chat-emoji';
 
Vue.config.productionTip = false;
Vue.use(Emoji);
 
new Vue({
  render: h => h(App)
}).$mount("#app");
```

## Props
```
Name | Type | Description
--- | --- | ---
`backgroundColor` | `String` | (Style property) set the emoji container background color. Default: #f5f5f5 or whitesmoke
`radius` | `String` or `Number` | (Style property) Set the emoji container border radius. Default: 8
`selectedCategory` | `String` | Set default emoji category. Default: "Smileys & Emotion"
`color` | `String` | Set emoji container color. Default: "#000"
`icon` | `String` | Set emoji icon. Default: "&#xf118;"
```

## Events
```
Name | Description
--- | ---
`click` | Emitted when emoji is clicked. 
```
```vue
<template>
  <div id="app">
    <Emoji @click="selectedEmoji"/>
  </div>
</template>

<script>
import Emoji from 'vue-chat-emoji'
export default {
  components: {
    Emoji
  },
  methods: {
    selectedEmoji(args) {
      console.log(args);
    }
  }
}
</script>
```