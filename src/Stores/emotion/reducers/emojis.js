import { actions } from "../action/constants";
import { emojiIndex } from "emoji-mart";
import data from "emoji-mart/data/all";
import _ from "lodash";

const getEmojiDataFromNative = nativeString => {
  return _.find(emojiIndex.emojis, { native: nativeString });
};

const initialState = {
  emojis: [
    {
      id: "surprised",
      singleEmoji: getEmojiDataFromNative("😲"),
      multipleEmojis: emojiIndex.search("surprised")
    },
    {
      id: "happy",
      singleEmoji: getEmojiDataFromNative("😂"),
      multipleEmojis: emojiIndex.search("face-happy")
    },
    {
      id: "disgusted",
      singleEmoji: getEmojiDataFromNative("🤢"),
      multipleEmojis: emojiIndex.search("sick")
    },
    {
      id: "fearful",
      singleEmoji: getEmojiDataFromNative("😱"),
      multipleEmojis: emojiIndex.search("fear")
    },
    {
      id: "sad",
      singleEmoji: getEmojiDataFromNative("😥"),
      multipleEmojis: emojiIndex.search("sad")
    },
    {
      id: "angry",
      singleEmoji: getEmojiDataFromNative("😠"),
      multipleEmojis: emojiIndex.search("angry")
    },
    {
      id: "neutral",
      singleEmoji: getEmojiDataFromNative("😐"),
      multipleEmojis: emojiIndex.search("neutral")
    }
  ],
  loading: false,
  error: false
};
const getSingleEmoji = (state, emotion) => {
  return state.emojis.find(emoji => emoji.id === emotion).singleEmoji;
};

const getMultipleEmoji = (state, emotion) => {
  return state.emojis.find(emoji => emoji.id === emotion).multipleEmojis;
};

export const emojis = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SINGLE_EMOJI:
      console.log(action.type, action.payload);
      return {
        ...state,
        emoji: getSingleEmoji(state, action.payload)
      };
    case actions.GET_MULTIPLE_EMOJI:
      console.log(action.type, action.payload);
      return {
        ...state,
        emojis: getMultipleEmoji(state, action.payload)
      };
    default:
      return {
        ...state
      };
  }
};
