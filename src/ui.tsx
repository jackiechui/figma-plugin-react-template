import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { sendMessage, onMessage } from "./messageHandlers/uiMessageHandler";
import { Button, Input, Label } from "react-figma-plugin-ds";
// See https://alexandrtovmach.github.io/react-figma-plugin-ds/ for a list of components.
import "./ui.scss";

function App() {
  const [count, setCount] = useState(5);
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    // Use onMessage() to handle messages received from the plugin code:
    onMessage("pageName", (currentPageName) => {
      setPageName(currentPageName);
    });
  }, []);

  return (
    <div className="app">
      <Label>Number of rectangles</Label>
      <Input
        className="countInput"
        type="number"
        defaultValue={5}
        placeholder="Count"
        onChange={(value) => {
          setCount(parseInt(value));
        }}
      />

      <Button
        className="button"
        onClick={() => {
          // Use sendMessage() to send messages to the plugin code:
          sendMessage("createRectangle", count);
        }}
      >
        Create {count} rectangles on {pageName}
      </Button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("react-page"));
