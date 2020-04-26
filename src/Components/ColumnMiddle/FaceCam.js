import React from "react";
import Webcam from "react-webcam";
import { Emoji } from "emoji-mart";
import { compose } from "recompose";
import withStyles from "@material-ui/core/styles/withStyles";
import { withTranslation } from "react-i18next";
import * as faceapi from "face-api.js";
import _ from "lodash";
//import EmotionManager from "../../Workers/EmotionManager";

const MODELPATH = "/data/models";
const WIDTH = 420;
const HEIGHT = 420;
const inputSize = 160;

class FaceCam extends React.Component {
  constructor(props) {
    super(props);
    this.webcam = React.createRef();
    //this.emotionManager = EmotionManager;
    //this.emotionManager.loadNets();
    this.state = {
      fullDesc: null,
      detections: null,
      expressions: null,
      facingMode: null,
      currentEmotion: null
    };

    Promise.all([
      faceapi.nets.tinyFaceDetector.load(MODELPATH),
      faceapi.nets.faceExpressionNet.load(MODELPATH),
      faceapi.nets.faceLandmark68Net.load(MODELPATH)
    ])
      .then(() => {
        console.log("all nets are loaded");
        this.setInputDevice();
      })
      .catch(() => console.error("Nets didn't loaded"));
  }

  setInputDevice = () => {
    navigator.mediaDevices
      .enumerateDevices()
      .then(async devices => {
        let inputDevice = await devices.filter(
          device => device.kind === "videoinput"
        );
        if (inputDevice.length < 2) {
          await this.setState({
            facingMode: "user"
          });
        } else {
          await this.setState({
            facingMode: { exact: "environment" }
          });
        }
      })
      .then(this.startCapture);
  };
  startCapture = () => {
    // capture all 1.5 sec a screenshot
    console.log("start capture");
    this.interval = setInterval(() => {
      this.capture();
    }, 1000);
  };

  capture = async () => {
    if (!!this.webcam.current) {
      await this.getFullFaceDescription(
        this.webcam.current.getScreenshot(),
        inputSize
      ).then(fullDesc => {
        let currentEmotion = null;
        if (fullDesc) {
          let expressions = fullDesc.expressions;
          currentEmotion = Object.keys(expressions).reduce((a, b) =>
            expressions[a] > expressions[b] ? a : b
          );

          if (currentEmotion === "happy") {
            currentEmotion = "smile";
          }

          this.setState({ currentEmotion });
          this.sendEmotion();
        }

        this.setState({ fullDesc: fullDesc });
      });
    }
  };

  getFullFaceDescription = async function(blob, inputSize = 512) {
    // tiny_face_detector options
    let scoreThreshold = 0.4;
    const OPTION = new faceapi.TinyFaceDetectorOptions({
      inputSize,
      scoreThreshold
    });

    // fetch image to api
    let img = await faceapi.fetchImage(blob);

    console.log(blob);
    // detect all faces and generate full description from image
    // including landmark and descriptor of each face
    let fullDesc = await faceapi
      .detectAllFaces(img, OPTION)
      .withFaceLandmarks()
      .withFaceExpressions();
    return fullDesc[0];
  };

  sendEmotion = () => {
    if (this.state.currentEmotion) {
      this.props.emotionCallback(this.state.currentEmotion);
    } else {
      console.error("no emotion detected");
    }
  };

  render() {
    const { detections, facingMode } = this.state;
    let videoConstraints = null;
    let camera = "";
    if (!!facingMode) {
      videoConstraints = {
        width: WIDTH,
        height: HEIGHT,
        facingMode: facingMode,
        screenshotFormat: "image/jpeg"
      };
      if (facingMode === "user") {
        camera = "Front";
      } else {
        camera = "Back";
      }
    }

    return (
      <>
        <Webcam
          audio={false}
          height={HEIGHT}
          width={WIDTH}
          ref={this.webcam}
          videoConstraints={videoConstraints}
        />
      </>
    );
  }
}

const enhance = compose(withTranslation());
export default enhance(FaceCam);
