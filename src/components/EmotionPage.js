import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import face from "./images/emotions/face.png";
import faceHappy from "./images/emotions/faceHappy.png";
import faceElated from "./images/emotions/faceElated.png";
import faceSad from "./images/emotions/faceSad.png";
import pops from "./images/emotions/pops.jpg";
import smileHappy from "./images/emotions/smile-happy.png";
import smileElated from "./images/emotions/smile-elated.png";
import smileSad from "./images/emotions/smile-sad.png";
import { DropTarget, DragSource } from "react-dnd";

function EmotionPage() {
  const history = useHistory();
  function changePage(emotion) {
    history.push(process.env.PUBLIC_URL + "/thanks/" + emotion);
  }

  const [emotion, changeEmotion] = useState("none");

  if (emotion !== "none") {
    setTimeout(() => changePage(emotion), 2000);
  }

  const changeFaceHandler = emotion => event => {
    changeEmotion(emotion);
  };

  return (
    <div className="App">
      <section>
        <div>
          <h1>Hey there?</h1>
          <h1>
            What do you <strong>THINK!</strong>
          </h1>
          <h5 className="header-body" onClick={changePage}>
            If you would chose an emotion for how women feel in the present
            times, what would it be?
          </h5>
        </div>

        <TargetFace faceEmotion={emotion} />
        <div>
          <h6>
            Please <strong>TAP</strong> on the below emotions and see what she
            says.
          </h6>
          <div className="actions emotions-img">
            <SmileDraggable
              emotion={"sad"}
              changeFaceHandler={changeFaceHandler}
            />
            <SmileDraggable
              emotion={"happy"}
              changeFaceHandler={changeFaceHandler}
            />
            <SmileDraggable
              emotion={"elated"}
              changeFaceHandler={changeFaceHandler}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function SmileDraggable(props) {
  const smileList = {
    happy: smileHappy,
    elated: smileElated,
    sad: smileSad
  };
  const { emotion, changeFaceHandler } = props;

  const styling = {
    dispay: "inline-block",
    border: "1px solid #000",
    marginRight: "20px",
    width: "110px",
    height: "110px",

    borderRadius: "50%"
  };
  return (
    <div style={styling} onClick={changeFaceHandler(emotion)}>
      <img alt={emotion} src={smileList[emotion]} />
      {capitalize(emotion)}
    </div>
  );
}

const smileSource = {
  beginDrag(props) {
    return { emotion: props.emotion };
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop) {
      return;
    }

    return;
    // return props.handleDrop(props.emotion);
  }
};

function collect(connect, monitor) {
  console.log(monitor);
  console.log(connect);
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    preview: connect.dragPreview
  };
}
const SmileDrag = DragSource("emotion", smileSource, collect)(SmileDraggable);

function WomenFace(props) {
  console.log(props);
  const { connectDropTarget, faceEmotion } = props;
  const faceList = {
    none: face,
    happy: faceHappy,
    sad: faceSad,
    elated: faceElated
  };

  const backgroundPop = {
    backgroundImage: "url(" + pops + ")",
    backgroundPosition: "center -20px",
    backgroundRepeat: "no-repeat"
  };

  const styles = {
    height: "40vh"
  };

  const styling =
    faceEmotion === "happy" || faceEmotion === "elated"
      ? { ...backgroundPop, ...styles }
      : styles;

  return connectDropTarget(
    <div className="image-container" style={styling}>
      <img alt="face" src={faceList[faceEmotion] + "?" + faceEmotion} />
    </div>
  );
}

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    emotion: monitor.getItem()
  };
}
const TargetFace = DropTarget("emotion", {}, collectTarget)(WomenFace);

export default EmotionPage;
