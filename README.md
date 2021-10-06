# Vue Emoji Support

😜 Emoji picker and formatter for VueJS!

* Emoji picker
* Input conversion (`hello :birthday_cake:!` => hello 🎂 !)


## Fork

This repository is a fork of [vue-chat-emoji](https://github.com/vestusola/vue-chat-emoji). 

License [MIT](LICENSE) (c) Oyeleye Festus Olatunbosun [Vestusola]( https://github.com/vestusola).


## Why Fork?

This fork was originally used as a branch for PR to the origin package. But after an email-conversation with the author of the original package, a fork of the project with continued development was both recommended and approved from the author. 

Therefore, vue-emoji-support lays infront of you. 

Our goals:

* Cross-browser support
* Extended list of Emoji's
* Port to native JS, React and Vue 3


### Details

* ✅ Typescript support (base)
* ✅ Emoji picker 
* ✅ Emoji formatter 
* ✅ Security update monitored
* ✅ Minified distribution
* ❌ Crossbrowser emoji support (_see the supported browsers below!_)
* ❌ CDN Support  (_Please visit [the original repository](https://github.com/vestusola/vue-chat-emoji) for CDN usage!_)


Supported browsers as of date:

* ✅ Windows 10 Chrome
* ✅ Windows 10 Firefox
* ✅ Mac Chrome
* ✅ Mac Safari
* ❌ Linux Chromium
* ❌ Linux Chrome

List is resolved throughout manual testing against the specified browsers and operative systems.


## Preview

![Vue Chat Emoji list](public/demo.png?raw=true "Vue Chat Emoji list")

## Installation

Using npm 

```
npm install ucs-it-solutions/vue-emoji-support#release
```

Using yarn

```
yarn add ucs-it-solutions/vue-emoji-support#release
```

## Usage

Using inside component:

```vue
<template>
  <div id="app">
    <Emoji />
  </div>
</template>

<script>
import { VueChatEmoji, emojis } from 'vue-chat-emoji'
require("vue-chat-emoji/dist/vue-chat-emoji.css");
export default {
  components: {
    Emoji: VueChatEmoji
  }
}
</script>
```


Using globally
```js
import Vue from "vue";
import App from "./App.vue";
 
import { VueChatEmoji } from 'vue-chat-emoji';
Vue.component("Emoji", VueChatEmoji);
require("vue-chat-emoji/dist/vue-chat-emoji.min.css");

Vue.config.productionTip = false;
Vue.use(Emoji);
 
new Vue({
  render: h => h(App)
}).$mount("#app");
```

#### Events
Name | Description
--- | ---
`click` | Emitted when an emoji is clicked. 
```vue
<template>
  <div id="app">
    <Emoji @click="selectedEmoji"/>
  </div>
</template>

<script>
import { VueChatEmoji, emojis } from 'vue-chat-emoji'
export default {
  components: {
    Emoji: VueChatEmoji
  },
  methods: {
    selectedEmoji(emoji) {
      console.log(emoji); /* return {...}*/
    }
  }
}
</script>
```


#### Methods

List of methods available:

```
Usage | Description
--- | ---
`get()` | List all emojis. Return [{...}]. 
`all()` | List all emojis. Return [{...}]
`encodeEmoji()` | Convert emoji character to string. e.g "🎂" => ":birthday_cake:"
`decodeEmoji()` | Convert valid emoji key to character. e.g ":birthday_cake:" => "🎂" 
`getRandomEmoji()` | Return random emoji. Return {...}
`findEmojiByKey()` | Return {...} if found and undefined if not found.
`findEmojiByName()` | Return {...} if found and undefined if not found.
`searchEmojiByName()` | Return [{...}] if found and [] if search not found.
`findEmojiByGroup()` | Return [{...}] if found and [] if search not found.
```

### Props

List of props available:


Name | Type | Description
--- | --- | ---
`backgroundColor` | `String` | (Style property) set the emoji container background color. Default: #f5f5f5 or whitesmoke
`radius` | `String` / `Number` | (Style property) Set the emoji container border radius. Default: 8
`selectedCategory` | `String` | Set default emoji category. Default: "Smileys & Emotion"
`color` | `String` | Set emoji container color. Default: "#000"
`icon` | `String` | Set emoji icon. Default: "fa fa-smile"
`open` | `Boolean` | Hide or show emoji container. Default: false
`toggle` | `Event` | To hide or show emoji container
`width` | `String` | Set emoji container width. Default: 96%
`height` | `String` | Set emoji container height. Default: 250px
`searchLabel` | `String` | Set search input field placeholder. Default: "Search".


## Example of usage

```vue
<template>
  <div id="app">
    <Emoji 
      searchLabel="Search after emoji"
      icon="fa fa-smile"
      selectedCategory="Smileys & Emoticon"
    />
  </div>
</template>

<script>
import { VueChatEmoji, emojis } from 'vue-chat-emoji'
export default {
  components: {
    Emoji: VueChatEmoji
  },
  methods: {
    getAllEmojis() {
      console.log(emojis.all()); // [{...}]
      this.emojifyString("Here is your 🎂.") /* => Here is your :birthday_cake:.*/
      this.unEmojifyString("Here is your :birthday_cake:.") /* Here is your 🎂.*/
    },
    unEmojifyString(str) {
      console.log(emojis.decodeEmoji(str)) 
    },
    emojifyString(str) {
      console.log(emojis.encodeEmoji(str));
    }
  },
  mounted() {
    this.getAllEmojis();
  }
}
</script>
```

## Using with CDN

This repository has no published package as of yet due to the minimal diff against original repository. 

Please visit [the original repository](https://github.com/vestusola/vue-chat-emoji) to see CDN usage instructions.

---

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

- [PatricNox](https://github.com/PatricNox) - Fork creator
- [Oyeleye Festus Olatunbosun](https://github.com/Vestusola) - Package creator
- [All Contributors](../../contributors) - UCS IT crew & open-source contributors
