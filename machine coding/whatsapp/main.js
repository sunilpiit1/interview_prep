import { messages } from "./data/messages.js";

/** selectors list */
const leftSide = document.querySelector(".leftMain");
const rightSide = document.querySelector(".rightMain");

(function () {
  let html = "";
  for (let key in messages) {
    html += `<div class='userCard'>${key}</div>`;
  }
  leftSide.innerHTML = html;
  /**attaching event to left side, event delegation use */
  leftSide.addEventListener("click", handleUserCardClick);
})();

function handleUserCardClick(e) {
  if (e.target.classList.contains("userCard")) {
    const user = e.target.textContent;
    const userMessages = messages[user];
    const html = userMessages.reduce((currentValue, msg) => {
      return currentValue + `<div class='msg'>${msg.text}</div>`;
    }, "");
    rightSide.innerHTML = html;
  }
  console.log(e.target.textContent);
}

console.log("loaded");
