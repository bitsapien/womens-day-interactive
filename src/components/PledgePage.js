import React from "react";
import safety from "./images/safety.png";
import stereotype from "./images/stereotype.jpg";
import girlEducation from "./images/girl-education.png";

function PledgePage({ match }) {
  const messages = {
    "girl-education": {
      text: "I pledge to contribute my support to Girl Child Education.",
      image: girlEducation
    },
    stereotyping: {
      text: "I pledge to say \"NO to stereotyping\" ",
      image: stereotype
    },
    safety: {
      text: "I pledge to \"Make everyone feel Safe\"!",
      image: safety
    }
  };

  const marginTop = {
    paddingTop: "10vh"
  };
  return (
    <div className="App">
      <section style={marginTop}>
        <h1>On this "Women's Day"</h1>
        <h1>{messages[match.params.value]["text"]}</h1>
        <div className="image-container">
          <img
            alt={match.params.value}
            src={messages[match.params.value]["image"]}
          />
        </div>

<div style={{marginTop: '4em'}}>
          <Link style={{fontSize: "1.5em", marginTop: "3em", color: "blue", textDecoration: "none"}} to={process.env.PUBLIC_URL+"/"}> Done </Link>
</div>
      </section>
    </div>
  );
}

export default PledgePage;
