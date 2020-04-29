import React, { Component } from "react";
import classNames from "classnames";
import { compose } from "recompose";
import withStyles from "@material-ui/core/styles/withStyles";
import { withTranslation } from "react-i18next";
import ApplicationStore from "../../Stores/ApplicationStore";
import LocalizationStore from "../../Stores/LocalizationStore";
import InsertEmoticonIcon from "../../Assets/Icons/Face";
import IconButton from "@material-ui/core/IconButton";
import { EMOJI_PICKER_TIMEOUT_MS } from "../../Constants";
import Button from "@material-ui/core/Button";
import FaceCam from "./FaceCam";
import StickersPicker from "./StickersPicker";
import { emojiIndex } from "emoji-mart";
import "./RealEmojiPicker";
import RealEmojiPicker from "./RealEmojiPicker";
import Webcam from "./Webcam";
import { connect } from "react-redux";
import { actions } from "../../Stores/emotion/action/constants";

const styles = theme => ({
  pickerRoot: {
    zIndex: theme.zIndex.modal,
    width: 338,
    height: 200,
    overflowX: "hidden",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[8],
    position: "absolute",
    bottom: 54,
    display: "none"
  },
  pickerRootOpened: {
    display: "block"
  }
});

class FaceApiEmojiPickerButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      tab: 0,
      currentEmotion: null
    };
  }

  emotionCallback = emotionFromChild => {
    this.setState({
      currentEmotion: emotionFromChild
    });
  };
  handleMouseClick = event => {
    console.log("mouse clicked");
    console.log(this.state.currentEmotion);
    if (this.state.currentEmotion) {
      console.log(emojiIndex.search(this.state.currentEmotion)[0]);
      this.props.onSelect(emojiIndex.search(this.state.currentEmotion)[0]);
    }
  };
  // opens the menu and set state to open
  handleButtonMouseEnter = event => {
    this.buttonEnter = true;
    setTimeout(() => {
      if (!this.buttonEnter) return;

      this.updatePicker(true);
    }, EMOJI_PICKER_TIMEOUT_MS);
  };

  handleButtonMouseLeave = () => {
    this.buttonEnter = false;
    setTimeout(() => {
      this.tryClosePicker();
    }, EMOJI_PICKER_TIMEOUT_MS);
  };

  tryClosePicker = () => {
    if (this.paperEnter) {
      return;
    } else {
      this.updatePicker(false);
    }
  };

  updatePicker = function(open) {
    this.setState({ open });
  };

  handlePaperMouseEnter = () => {
    this.paperEnter = true;
    this.props.toggleLock()
  };

  handlePaperMouseLeave = () => {
    // return;

    this.paperEnter = false;
    this.props.toggleLock()
    setTimeout(() => {
      this.tryClosePicker();
    }, EMOJI_PICKER_TIMEOUT_MS);
  };

  render() {
    const { classes, theme } = this.props;
    const { open, tab } = this.state;

    return (
      <>
        <IconButton
          className="inputbox-icon-button"
          aria-label="Emoticon"
          onMouseEnter={this.handleButtonMouseEnter}
          onMouseLeave={this.handleButtonMouseLeave}
          onClick={this.handleMouseClick}
        >
          <InsertEmoticonIcon />
        </IconButton>
        <div
          className={classNames(classes.pickerRoot, {
            [classes.pickerRootOpened]: open
          })}
          onMouseEnter={this.handlePaperMouseEnter}
          onMouseLeave={this.handlePaperMouseLeave}
        >
          <RealEmojiPicker onSelect={this.props.onSelect} />
          <Webcam />
        </div>
      </>
    );
  }
}

const enhance = compose(
  withStyles(styles, { withTheme: true }),
  withTranslation()
);
const mapDispatchToProps = (dispatch) => {
  return {
    toggleLock: () => {
      dispatch({ type: actions.TOGGLE_LOCK});
    },
  };
};
export default connect(null, mapDispatchToProps)(enhance(FaceApiEmojiPickerButton));
