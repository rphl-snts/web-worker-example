const workerReply = onmessage = e => {
  const message = e.data;
  console.log(`[From Main]: ${message}`);

  return setTimeout(() => postMessage("Pong!"));
};

export default { workerReply };
