import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import causeFace from "./images/cause.png";

function CausePage({ match }) {
  const messageList = {
    happy: "Let the glow of smile become the light of laughter!",
    sad: "Sad Truth!",
    elated: "For making me smile"
  };

  const [showCompleteCausePage, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const marginStyle = {
    marginTop: "25vh"
  };

  return (
    <div className="App">
      <section>
        <div
          className="cause-top center-animation"
          style={showCompleteCausePage ? {} : marginStyle}
        >
          <h1>{match.params.emotion === "sad" ? "" : "Thank You!"}</h1>
          <h1> {messageList[match.params.emotion]}</h1>
          <h5 className="header-body">
            <strong>"YOU"</strong> have the power to spread smiles to all the
            women out there.
          </h5>
        </div>
        {showCompleteCausePage && <CauseSelection />}
      </section>
    </div>
  );
}

function CauseSelection() {
  const history = useHistory();
  function takePledge(event) {
    const pledge = event.target.value;
    // setTimeout(() => history.push(process.env.PUBLIC_URL+"/pledge/"+ pledge), 1000);
  }
  return (
    <div>
      <h5 className="header-body">
        {" "}
        Below are a few challenges that are yet to be resolved.{" "}
      </h5>
      <div class="empowered-women-face">
        <div className="image-container">
          <img alt="face" src={causeFace} />
        </div>
      </div>

      <div class="actions">
        <h5>As a ThoughtWorker, which initiative would you take?</h5>
        <div class="action-options">
          <input
            type="radio"
            id="f-option"
            value="girl-education"
            onChange={takePledge}
          />
          <label for="f-option">
            <span></span>Girl child education
          </label>

          <input
            type="radio"
            id="s-option"
            value="safety"
            onChange={takePledge}
          />
          <label for="s-option">
            <span></span>Safety
          </label>

          <input
            type="radio"
            id="t-option"
            value="stereotyping"
            onChange={takePledge}
          />
          <label for="t-option">
            <span></span> NO to stereotyping
          </label>
        </div>
      </div>
    </div>
  );
}

export default CausePage;
