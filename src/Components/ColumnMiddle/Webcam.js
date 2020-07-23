import React from "react";
import * as faceapi from "face-api.js";
import { connect } from "react-redux";
import { actions } from "../../Stores/emotion/action/constants";
import { Divider } from "@material-ui/core";
import "./Webcam.css";
class Webcam extends React.Component {
  constructor(props) {
    super(props);
    this.streamCamVideo = this.streamCamVideo.bind(this);
    this.videoElement = React.createRef();
    this.state = {
      fullDesc: null,
      detections: null,
      expressions: null,
      facingMode: null,
      currentEmotion: null,
      count: 0,
    };
    Promise.all([
      faceapi.nets.tinyFaceDetector.load("data/models/"),
      faceapi.nets.faceExpressionNet.load("data/models/"),
      faceapi.nets.faceLandmark68Net.load("data/models/"),
    ])
      .then(() => {
        console.log("all nets are loaded");
        this.streamCamVideo();
        this.initEventListener(this.videoElement);
      })
      .catch(() => console.error("Nets didn't loaded"));
  }
  streamCamVideo() {
    const constraints = { audio: false, video: true };
    const videoRef = this.videoElement.current;
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (mediaStream) {
        videoRef.srcObject = mediaStream;
        videoRef.onloadedmetadata = function (e) {
          videoRef.play();
        };
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  }
  componentDidMount() {}

  handleClick = () => {
    // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };

  changeEmotion(detection) {
    this.emit();
  }

  initEventListener(videoRef) {
    const video = videoRef.current;

    video.addEventListener("play", () => {
      setInterval(async () => {
        const singleResult = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();
        console.log(singleResult);
        if (!!singleResult[0]) {
          const expressions = singleResult[0].expressions;
          expressions.neutral = expressions.neutral * 0.7;
          const currentEmotion = Object.keys(expressions).reduce((a, b) =>
            expressions[a] > expressions[b] ? a : b
          );
          this.props.changeEmotion(currentEmotion);
        }
      }, 1000);
    });
  }

  render() {
    return (
      <div>
        <video
          autoPlay={true}
          ref={this.videoElement}
          className={"videoStyle"}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeEmotion: (emotion) => {
      dispatch({ type: actions.CHANGE_EMOTION, payload: emotion });
    },
  };
};
export default connect(null, mapDispatchToProps)(Webcam);
