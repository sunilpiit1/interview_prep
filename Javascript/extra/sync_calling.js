async function syncCall(asyncCalls) {
  for (let i = 0; i < asyncCalls.length; i++) {
    await asyncCalls[i]();
  }
}

function firstAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Sunil pal");
      resolve();
    }, 3000);
  });
}

function secondAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Anil pal");
      resolve();
    }, 1000);
  });
}

syncCall([firstAsync, secondAsync]);
