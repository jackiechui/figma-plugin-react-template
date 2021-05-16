import { sendMessage, onMessage } from "./messageHandlers/codeMessageHandler";

figma.showUI(__html__);

// To communicate with the UI, use sendMessage() to send messages:
sendMessage("pageName", figma.currentPage.name);

// Use onMessage() to handle messages received from the UI:
onMessage("createRectangle", (count) => {
  const nodes = [];

  for (let i = 0; i < count; i++) {
    const rect = figma.createRectangle();
    rect.x = i * 150;
    rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
    figma.currentPage.appendChild(rect);
    nodes.push(rect);
  }

  figma.currentPage.selection = nodes;
  figma.viewport.scrollAndZoomIntoView(nodes);
  figma.closePlugin();
});
