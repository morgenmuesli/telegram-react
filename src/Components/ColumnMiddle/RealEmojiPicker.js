import React from "react";
import { connect } from "react-redux";
import { emojis } from "../../Stores/emotion/reducers/emojis";
import { Emoji } from "emoji-mart";
import data from "emoji-mart/data/all.json";

function RealEmojiPicker(props) {
  let emojiList = props.emojis.multipleEmojis.map((emo) => (
    <Emoji emoji={emo} size={32} onClick={props.onSelect} />
  ));

  return <div>{emojiList}</div>;
}

const mapStateToProps = (state) => ({
  currentEmotion: state.emotions.currentEmotion,
  emojis: state.emojis.emojis.find(
    (emojis) => emojis.id === state.emotions.currentEmotion
  ),
});

export default connect(mapStateToProps)(RealEmojiPicker);
