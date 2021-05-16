const messageListeners: { type: String; callback: Function }[] = [];
export const sendMessage = (action: String, data?: any) => {
  figma.ui.postMessage({ action, data });
};
export const onMessage = (type: String, callback: Function) => {
  messageListeners.push({ type, callback });
};
figma.ui.onmessage = (message) => {
  for (let messageListener of messageListeners) {
    if (message.action === messageListener.type)
      messageListener.callback(message.data);
  }
};
