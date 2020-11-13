let toggleState = false;

const keyboardContent = `<g id="keyboard"><g id="arrow-keys"><g id="ArrowDown"><path id="Rectangle 4" d="M642 343c0-6 4-10 10-10h61c6 0 10 4 10 10v7c0 6-4 10-10 10h-61c-6 0-10-4-10-10v-7z" fill="#33BCEB"/><path id="Rectangle 2" d="M642 297c0-9 8-17 17-17v52l-17 18v-53z" fill="#00ABE6"/><path id="Rectangle 3" d="M723 297c0-9-8-17-17-17v52l17 18v-53z" fill="#00ABE6"/><path id="Rectangle 1" d="M654 285c0-3 2-5 5-5h47c3 0 5 2 5 5v43c0 6-4 10-10 10h-37c-6 0-10-4-10-10v-43z" fill="#66CDF0"/><path id="Vector 4" d="M682 322h1l7-7a1 1 0 10-2-1l-5 6-6-6a1 1 0 10-2 1l7 7zm2-25a1 1 0 00-2 0h2zm0 24v-24h-2v24h2z" fill="#212133"/></g><g id="ArrowUp"><path id="Rectangle 4_2" d="M642 258c0-6 4-10 10-10h61c6 0 10 4 10 10v7c0 6-4 10-10 10h-61c-6 0-10-4-10-10v-7z" fill="#33BCEB"/><path id="Rectangle 2_2" d="M642 212c0-9 8-17 17-17v52l-17 18v-53z" fill="#00ABE6"/><path id="Rectangle 3_2" d="M723 212c0-9-8-17-17-17v52l17 18v-53z" fill="#00ABE6"/><path id="Rectangle 1_2" d="M654 200c0-3 2-5 5-5h47c3 0 5 2 5 5v43c0 6-4 10-10 10h-37c-6 0-10-4-10-10v-43z" fill="#66CDF0"/><path id="Vector 3" d="M683 211h-1l-7 7a1 1 0 102 1l6-6 5 6a1 1 0 102-1l-7-7zm-1 25a1 1 0 002 0h-2zm0-24v24h2v-24h-2z" fill="#212133"/></g><g id="ArrowRight"><path id="Rectangle 4_3" d="M728 343c0-6 4-10 10-10h61c6 0 10 4 10 10v7c0 6-4 10-10 10h-61c-6 0-10-4-10-10v-7z" fill="#33BCEB"/><path id="Rectangle 2_3" d="M728 297c0-9 8-17 17-17v52l-17 18v-53z" fill="#00ABE6"/><path id="Rectangle 3_3" d="M809 297c0-9-8-17-17-17v52l17 18v-53z" fill="#00ABE6"/><path id="Rectangle 1_3" d="M740 285c0-3 2-5 5-5h47c3 0 5 2 5 5v43c0 6-4 10-10 10h-37c-6 0-10-4-10-10v-43z" fill="#66CDF0"/><path id="Vector 5" d="M781 310v-2l-6-6a1 1 0 10-2 1l6 6-6 6a1 1 0 102 1l6-6zm-24-2a1 1 0 000 2v-2zm24 0h-24v2h24v-2z" fill="#212133"/></g><g id="ArrowLeft"><path id="Rectangle 4_4" d="M556 343c0-6 4-10 10-10h61c6 0 10 4 10 10v7c0 6-4 10-10 10h-61c-6 0-10-4-10-10v-7z" fill="#33BCEB"/><path id="Rectangle 2_4" d="M556 297c0-9 8-17 17-17v52l-17 18v-53z" fill="#00ABE6"/><path id="Rectangle 3_4" d="M637 297c0-9-8-17-17-17v52l17 18v-53z" fill="#00ABE6"/><path id="Rectangle 1_4" d="M568 285c0-3 2-5 5-5h47c3 0 5 2 5 5v43c0 6-4 10-10 10h-37c-6 0-10-4-10-10v-43z" fill="#66CDF0"/><path id="Vector 6" d="M584 310v-2l6-6a1 1 0 112 1l-6 6 6 6a1 1 0 11-2 1l-6-6zm25-2a1 1 0 010 2v-2zm-24 0h24v2h-24v-2z" fill="#212133"/></g></g><g id="Escape"><path id="Rectangle 4_5" d="M0 63c0-6 4-10 10-10h61c6 0 10 4 10 10v7c0 6-4 10-10 10H10C4 80 0 76 0 70v-7z" fill="#33BCEB"/><path id="Rectangle 2_5" d="M0 17C0 8 8 0 17 0v52L0 70V17z" fill="#00ABE6"/><path id="Rectangle 3_5" d="M81 17c0-9-8-17-17-17v52l17 18V17z" fill="#00ABE6"/><path id="Rectangle 1_5" d="M12 5c0-3 2-5 5-5h47c3 0 5 2 5 5v43c0 6-4 10-10 10H22c-6 0-10-4-10-10V5z" fill="#66CDF0"/><path id="Esc" d="M22 16h-4v3h4v1h-5v-9h5v2h-4v2h4v1zm5 2l-1-1h-1l-2-2 1-1h4v2h-1v-1h-1-1v1h1l2 1v3h-3l-1-1-1-1h2v1h2v-1zm5 1h1l1-1h1v1l-1 1h-2l-2-1-1-2 1-3h4l1 2h-1l-1-1h-1-1v3l1 1z" fill="#212133"/></g><g id="Tab"><path id="Vector 5_2" d="M53 134v-2l-6-6a1 1 0 10-2 1l6 6-6 6a1 1 0 102 1l6-6zm-24-2a1 1 0 000 2v-2zm24 0H29v2h24v-2z" fill="#212133"/><path id="Vector" d="M0 167v7c0 6 4 10 10 10h102c6 0 10-4 10-10v-7c0-6-4-10-10-10H10c-6 0-10 4-10 10z" fill="#33BCEB"/><path id="Rectangle 2_6" d="M0 121c0-9 8-17 17-17v52L0 174v-53z" fill="#00ABE6"/><path id="Rectangle 3_6" d="M122 121c0-9-8-17-17-17v52l17 18v-53z" fill="#00ABE6"/><path id="Vector_2" d="M12 109v43c0 6 4 10 10 10h78c6 0 10-4 10-10v-43c0-3-2-5-5-5H17c-3 0-5 2-5 5z" fill="#66CDF0"/><g id="Group 19"><g id="Group 21"><path id="Vector 6_2" d="M28 149v-2l7-6a1 1 0 111 1l-6 6 6 6a1 1 0 11-1 1l-7-6zm25-2a1 1 0 010 2v-2zm-24 0h24v2H29v-2z" fill="#212133"/><path id="Vector 9" d="M28 155v-14" stroke="#212133" stroke-width="2" stroke-linecap="round"/></g><g id="Group 20"><path id="Vector 5_3" d="M54 135v-2l-7-6a1 1 0 10-1 1l6 6-6 6a1 1 0 101 1l7-6zm-25-2a1 1 0 000 2v-2zm24 0H29v2h24v-2z" fill="#212133"/><path id="Vector 10" d="M55 141v-14" stroke="#212133" stroke-width="2" stroke-linecap="round"/></g><path id="Tab_2" d="M35 117h-3v7h-1v-7h-3v-2h7v2zm4 7v-1l-2 1h-2v-2l1-1 2-1h1l-1-1h-3l1-1h3l1 2v4h-1zm-2-1h1l1-1v-1h-2l-1 1 1 1zm10-2l-1 2-1 1-2-1v1h-1v-9h1v3h3l1 3zm-1 0l-1-2h-1l-1 1v2l1 1 1-1 1-1z" fill="#212133"/></g></g><g id="Space"><path id="Vector 5_4" d="M231 310v-2l-6-6a1 1 0 10-2 1l6 6-6 6a1 1 0 102 1l6-6zm-24-2a1 1 0 000 2v-2zm24 0h-24v2h24v-2z" fill="#212133"/><path id="Vector_3" d="M178 343v7c0 6 4 10 10 10h318c6 0 10-4 10-10v-7c0-6-4-10-10-10H188c-6 0-10 4-10 10z" fill="#33BCEB"/><path id="Rectangle 2_7" d="M178 297c0-9 8-17 17-17v52l-17 18v-53z" fill="#00ABE6"/><path id="Rectangle 3_7" d="M516 297c0-9-8-17-17-17v52l17 18v-53z" fill="#00ABE6"/><path id="Vector_4" d="M190 285v43c0 6 4 10 10 10h294c6 0 10-4 10-10v-43c0-3-2-5-5-5H195c-3 0-5 2-5 5z" fill="#66CDF0"/></g><g id="ShiftRight"><path id="Vector_5" d="M763 255v7c0 6 4 10 10 10h230c6 0 10-4 10-10v-7c0-6-4-10-10-10H773c-6 0-10 4-10 10z" fill="#33BCEB"/><path id="Rectangle 2_8" d="M763 209c0-9 8-17 17-17v52l-17 18v-53z" fill="#00ABE6"/><path id="Rectangle 3_8" d="M1013 209c0-9-8-17-17-17v52l17 18v-53z" fill="#00ABE6"/><path id="Vector_6" d="M775 197v43c0 6 4 10 10 10h206c6 0 10-4 10-10v-43c0-3-2-5-5-5H780c-3 0-5 2-5 5z" fill="#66CDF0"/><path id="Vector 11" d="M944 222h5v11l1 1h12l1-1v-11h5a1 1 0 001-2l-12-12h-2l-12 12a1 1 0 001 2z" stroke="#212133" stroke-width="2" stroke-linejoin="round"/></g><g id="ShiftLeft"><path id="Vector 5_5" d="M53 222v-2l-6-6a1 1 0 10-2 1l6 6-6 6a1 1 0 102 1l6-6zm-24-2a1 1 0 000 2v-2zm24 0H29v2h24v-2z" fill="#212133"/><path id="Vector_7" d="M0 255v7c0 6 4 10 10 10h118c6 0 10-4 10-10v-7c0-6-4-10-10-10H10c-6 0-10 4-10 10z" fill="#33BCEB"/><path id="Rectangle 2_9" d="M0 209c0-9 8-17 17-17v52L0 262v-53z" fill="#00ABE6"/><path id="Rectangle 3_9" d="M138 209c0-9-8-17-17-17v52l17 18v-53z" fill="#00ABE6"/><path id="Vector_8" d="M12 197v43c0 6 4 10 10 10h94c6 0 10-4 10-10v-43c0-3-2-5-5-5H17c-3 0-5 2-5 5z" fill="#66CDF0"/><path id="Vector 12" d="M29 222h5v11l1 1h12l1-1v-11h5a1 1 0 001-2l-12-12h-2l-12 12a1 1 0 001 2z" stroke="#212133" stroke-width="2" stroke-linejoin="round"/></g><g id="Enter"><path id="Rectangle 4_6" d="M932 111c0-6 4-10 10-10h61c6 0 10 4 10 10v7c0 6-4 10-10 10h-61c-6 0-10-4-10-10v-7z" fill="#33BCEB"/><path id="Rectangle 2_10" d="M932 65c0-9 8-17 17-17v52l-17 18V65z" fill="#00ABE6"/><path id="Rectangle 3_10" d="M1013 65c0-9-8-17-17-17v52l17 18V65z" fill="#00ABE6"/><path id="Rectangle 4_7" d="M932 167c0-6 4-10 10-10h61c6 0 10 4 10 10v7c0 6-4 10-10 10h-61c-6 0-10-4-10-10v-7z" fill="#33BCEB"/><path id="Rectangle 2_11" d="M932 121c0-9 8-17 17-17v52l-17 18v-53z" fill="#00ABE6"/><path id="Rectangle 3_11" d="M1013 121c0-9-8-17-17-17v52l17 18v-53z" fill="#00ABE6"/><path id="Rectangle 4_8" d="M863 167c0-6 4-10 10-10h71v27h-71c-6 0-10-4-10-10v-7z" fill="#33BCEB"/><path id="Rectangle 2_12" d="M863 121c0-9 8-17 17-17v52l-17 18v-53z" fill="#00ABE6"/><path id="Union" d="M944 53c0-3 2-5 5-5h47c3 0 5 2 5 5v99c0 6-4 10-10 10H885c-6 0-10-4-10-10v-43c0-3 2-5 5-5h59c3 0 5-2 5-5V53z" fill="#66CDF0"/><path id="Vector 6_3" d="M936 134v-2l7-6a1 1 0 111 1l-6 6 6 6a1 1 0 11-1 1l-7-6zm36-44a1 1 0 012 0h-2zm-35 42h28v2h-28v-2zm35-7V90h2v35h-2zm-7 7c3 0 7-3 7-7h2c0 5-5 9-9 9v-2z" fill="#212133"/></g></g>`;
const SVGNS = "http://www.w3.org/2000/svg";

const keyStates = {
    'ArrowUp': false,
    'ArrowDown': false,
    'ArrowLeft': false,
    'ArrowRight': false,
    'Space': false,
    'Tab': false,
    'ShiftLeft': false,
    'ShiftRight': false,
    'Enter': false,
    'Escape': false
}

const validKeys = Object.keys(keyStates);

const keyboard = document.createElementNS(SVGNS, "svg");
keyboard.innerHTML = keyboardContent;
keyboard.setAttributeNS(null, "viewBox", "0 0 1024 360");
keyboard.setAttributeNS(null, "fill", "none");
keyboard.setAttributeNS(null, "overflow", "visible");
keyboard.setAttribute('id', 'keyboard-keyboard');
keyboard.style.width = "50vw";
keyboard.style.height = "auto";
keyboard.style.transition = "all .3s ease";
keyboard.style.zIndex = "999999";
keyboard.style.position = "fixed";
keyboard.style.bottom = "32px";
keyboard.style.left = "50%";
keyboard.style.transform = "translateX(-50%)";
keyboard.style.opacity = 0;
keyboard.style.pointerEvents = "none";
document.body.appendChild(keyboard);

const updateKeyboard = (keyStates) => {
    Object.keys(keyStates).map(keyCode=> {
        let thisKey = keyboard.getElementById(keyCode);
        if (thisKey) {
            thisKey.style.transition = "all .125s ease";
            thisKey.style.transformOrigin = `50% 50%`;
            thisKey.style.opacity = keyStates[keyCode] ? 1 : 0.5;
            thisKey.style.transform = `scale(${keyStates[keyCode] ? 0.985 : 1})`; 
        }
    })
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  toggleState = request.toggleState ? !toggleState : toggleState;
  updateKeyboard(keyStates);
  keyboard.style.opacity = toggleState ? 1 : 0;
  sendResponse({ toggleState: toggleState });
});

document.body.addEventListener("keydown", (e) => {
  keyStates[e.code] = true;
  validKeys.includes(e.code) && updateKeyboard(keyStates);
});
document.body.addEventListener("keyup", (e) => {
  keyStates[e.code] = false;
  validKeys.includes(e.code) && updateKeyboard(keyStates);
});