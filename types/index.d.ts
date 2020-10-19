declare module "vue-chat-emoji" {
  import { Component } from "vue/types/options";

  /* eslint-disable @typescript-eslint/no-explicit-any */
  /* eslint-disable @typescript-eslint/interface-name-prefix */
  
  export interface EmojiObjectInterface {
      emoji: string,
      group: string,
      key: string,
      name: string,
      unicode: string,
  }

  interface EmojiInterface {
      all(): EmojiObjectInterface[];
      get(): EmojiObjectInterface[];
      decodeEmoji(arg: string): string;
      encodeEmoji(arg: string): string;
      findEmojiByKey(arg: string): EmojiObjectInterface;
      findEmojiByName(arg: string): EmojiObjectInterface;
      searchEmojiByName(arg: string): EmojiObjectInterface;
      findEmojiByImage(arg: symbol): EmojiObjectInterface[];
      findEmojiByGroup(arg: string): EmojiObjectInterface;
      getRandomEmoji(): EmojiObjectInterface;
      getSkinTones(arg: string): EmojiObjectInterface[];
      getEmojiByCategoryAndSkinTone(arg: string, arg2: string): EmojiObjectInterface[];
  }

  export const emojis: EmojiInterface;
  export const VueChatEmoji: Component<
      any,
      any,
      any,
      {
      backgroundColor?: boolean;
      radius?: String | number;
      selectedCategory?: String;
      color?: String;
      icon?: String;
      open?: boolean;
      width?: String;
      height?: String;
      searchLabel?: String;
      }
  >;
}
