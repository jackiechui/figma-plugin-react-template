const messageListeners: { type: String; callback: Function }[] = [];
export const sendMessage = (action: String, data?: any) => {
  parent.postMessage({ pluginMessage: { action, data } }, "*");
};
export const onMessage = (type: String, callback: Function) => {
  messageListeners.push({ type, callback });
};
window.onmessage = (message) => {
  const pluginMessage = message.data.pluginMessage;
  for (let messageListener of messageListeners) {
    if (pluginMessage.action === messageListener.type)
      messageListener.callback(pluginMessage.data);
  }
};
