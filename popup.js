let toggleState;

const toggleButton = document.getElementById("toggle-keyboard");

const synchroniseWithPage = (toggle) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { toggleState: toggle }, (response) => {
      toggleState = response.toggleState;
      changeToggleText(toggleState);
    });
  });
};

const changeToggleText = (toggleState) =>
  (toggleButton.textContent = toggleState ? "Hide keyboard" : "Show keyboard");

synchroniseWithPage(false);

toggleButton.addEventListener("click", (e) => {
    synchroniseWithPage(true)
});