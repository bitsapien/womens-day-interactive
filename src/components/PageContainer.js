import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { DndProvider } from "react-dnd";
import Backend from "react-dnd-touch-backend";

import EmotionPage from "./EmotionPage";
import CausePage from "./CausePage";
import PledgePage from "./PledgePage";

function PageContainer({ location }) {
  return (
    <section className="route-section">
      <Switch location={location}>
        <DndProvider backend={Backend}>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={PageShell(EmotionPage)} />
          <Route
            exact
      path={process.env.PUBLIC_URL + "/thanks/:emotion"}
            component={PageShell(CausePage)}
          />
          <Route exact path={process.env.PUBLIC_URL + "/pledge/:value"} component={PageShell(PledgePage)} />
        </DndProvider>
      </Switch>
    </section>
  );
}

const PageShell = Page => {
  return props => (
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={"SlideIn"}
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>
  );
};
export default withRouter(PageContainer);
