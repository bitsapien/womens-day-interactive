import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import causeFace from './images/cause.png'
import educationIcon from './images/icons/educationicon.png';
import safetyIcon from './images/icons/safetyicon.png';
import stereotypeIcon from './images/icons/stereotype.png';

function CausePage() {
  const [showCompleteCausePage, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const marginStyle = {
    marginTop: "25vh"
  }

  return (
      <div className="App">
      <section >
        <div className="center-animation" style={showCompleteCausePage ? {} : marginStyle}>
          <h1>Thank You!</h1>
          <h5 className="header-body">
            <strong>"YOU"</strong> have the power to spread smiles to all the women
            out there. Below are a few challenges that are yet to be resolved.
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
    const timer = setTimeout(() => history.push("/pledge/"+ pledge), 1000);
  }
  return (
    <div>
      <div class="empowered-women-face">
        <div className="image-container" >
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
              <label for="f-option"><span></span>Contribute to girl child education</label>

              <input
                type="radio"
                id="s-option"
                value="safety"
                onChange={takePledge}
              />
              <label for="s-option"><span></span>Safety</label>

              <input
                type="radio"
                id="t-option"
                value="stereotyping"
                onChange={takePledge}
              />
              <label for="t-option"><span></span>  NO to stereotyping</label>
        </div>
      </div>
    </div>
  );
}

export default CausePage;
