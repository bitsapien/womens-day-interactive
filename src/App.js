import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import "./App.css";
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'

function App() {
  return (
    <Router>
      <DndProvider backend={TouchBackend}>
      <PageContainer />
      </DndProvider>
    </Router>
  );
}


export default App;
