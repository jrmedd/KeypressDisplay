let toggleState = false;

const keyboardContent = `<g id="keyboard"><g id="arrow-keys"><g id="ArrowDown"><path id="Rectangle 4" fill="#33BCEB" d="M642 289c0-6 4-10 10-10h61c6 0 10 4 10 10v7c0 6-4 10-10 10h-61c-6 0-10-4-10-10v-7z"/><path id="Rectangle 2" fill="#00ABE6" d="M642 243c0-9 8-17 17-17v52l-17 18v-53z"/><path id="Rectangle 3" fill="#00ABE6" d="M723 243c0-9-8-17-17-17v52l17 18v-53z"/><path id="Rectangle 1" fill="#66CDF0" d="M654 231c0-3 2-5 5-5h47c3 0 5 2 5 5v43c0 6-4 10-10 10h-37c-6 0-10-4-10-10v-43z"/><path id="Vector 4" fill="#212133" d="M682 268h1l7-7a1 1 0 10-2-1l-5 6-6-6a1 1 0 10-2 1l7 7zm2-25a1 1 0 00-2 0h2zm0 24v-24h-2v24h2z"/></g><g id="ArrowUp"><path id="Rectangle 4_2" fill="#33BCEB" d="M642 204c0-6 4-10 10-10h61c6 0 10 4 10 10v7c0 6-4 10-10 10h-61c-6 0-10-4-10-10v-7z"/><path id="Rectangle 2_2" fill="#00ABE6" d="M642 158c0-9 8-17 17-17v52l-17 18v-53z"/><path id="Rectangle 3_2" fill="#00ABE6" d="M723 158c0-9-8-17-17-17v52l17 18v-53z"/><path id="Rectangle 1_2" fill="#66CDF0" d="M654 146c0-3 2-5 5-5h47c3 0 5 2 5 5v43c0 6-4 10-10 10h-37c-6 0-10-4-10-10v-43z"/><path id="Vector 3" fill="#212133" d="M683 157h-1l-7 7a1 1 0 102 1l6-6 5 6a1 1 0 102-1l-7-7zm-1 25a1 1 0 002 0h-2zm0-24v24h2v-24h-2z"/></g><g id="ArrowRight"><path id="Rectangle 4_3" fill="#33BCEB" d="M728 289c0-6 4-10 10-10h61c6 0 10 4 10 10v7c0 6-4 10-10 10h-61c-6 0-10-4-10-10v-7z"/><path id="Rectangle 2_3" fill="#00ABE6" d="M728 243c0-9 8-17 17-17v52l-17 18v-53z"/><path id="Rectangle 3_3" fill="#00ABE6" d="M809 243c0-9-8-17-17-17v52l17 18v-53z"/><path id="Rectangle 1_3" fill="#66CDF0" d="M740 231c0-3 2-5 5-5h47c3 0 5 2 5 5v43c0 6-4 10-10 10h-37c-6 0-10-4-10-10v-43z"/><path id="Vector 5" fill="#212133" d="M781 256v-2l-6-6a1 1 0 10-2 1l6 6-6 6a1 1 0 102 1l6-6zm-24-2a1 1 0 000 2v-2zm24 0h-24v2h24v-2z"/></g><g id="ArrowLeft"><path id="Rectangle 4_4" fill="#33BCEB" d="M556 289c0-6 4-10 10-10h61c6 0 10 4 10 10v7c0 6-4 10-10 10h-61c-6 0-10-4-10-10v-7z"/><path id="Rectangle 2_4" fill="#00ABE6" d="M556 243c0-9 8-17 17-17v52l-17 18v-53z"/><path id="Rectangle 3_4" fill="#00ABE6" d="M637 243c0-9-8-17-17-17v52l17 18v-53z"/><path id="Rectangle 1_4" fill="#66CDF0" d="M568 231c0-3 2-5 5-5h47c3 0 5 2 5 5v43c0 6-4 10-10 10h-37c-6 0-10-4-10-10v-43z"/><path id="Vector 6" fill="#212133" d="M584 256v-2l6-6a1 1 0 112 1l-6 6 6 6a1 1 0 11-2 1l-6-6zm25-2a1 1 0 010 2v-2zm-24 0h24v2h-24v-2z"/></g></g><g id="Tab"><path id="Vector 5_2" fill="#212133" d="M53 93v-2l-6-6a1 1 0 00-2 1l6 6-6 6a1 1 0 002 1l6-6zm-24-2a1 1 0 100 2v-2zm24 0H29v2h24v-2z"/><path id="Vector" fill="#33BCEB" d="M0 126v7c0 6 4 10 10 10h102c6 0 10-4 10-10v-7c0-6-4-10-10-10H10c-6 0-10 4-10 10z"/><path id="Rectangle 2_5" fill="#00ABE6" d="M0 80c0-9 8-17 17-17v52L0 133V80z"/><path id="Rectangle 3_5" fill="#00ABE6" d="M122 80c0-9-8-17-17-17v52l17 18V80z"/><path id="Vector_2" fill="#66CDF0" d="M12 68v43c0 6 4 10 10 10h78c6 0 10-4 10-10V68c0-3-2-5-5-5H17c-3 0-5 2-5 5z"/><g id="Group 19"><g id="Group 21"><path id="Vector 6_2" fill="#212133" d="M28 108v-2l7-6a1 1 0 011 1l-6 6 6 6a1 1 0 11-1 1l-7-6zm25-2a1 1 0 010 2v-2zm-24 0h24v2H29v-2z"/><path id="Vector 9" stroke="#212133" stroke-linecap="round" stroke-width="2" d="M28 114v-14"/></g><g id="Group 20"><path id="Vector 5_3" fill="#212133" d="M54 94v-2l-7-6a1 1 0 00-1 1l6 6-6 6a1 1 0 101 1l7-6zm-25-2a1 1 0 100 2v-2zm24 0H29v2h24v-2z"/><path id="Vector 10" stroke="#212133" stroke-linecap="round" stroke-width="2" d="M55 100V86"/></g><path id="Tab_2" fill="#212133" d="M38 75h-3v7h-1v-7h-3v-2h7v2zm4 7v-1l-2 1h-2v-2l1-1 2-1h1l-1-1h-3l1-1h3l1 2v4h-1zm-2-1h1l1-1v-1h-2l-1 1 1 1zm10-2l-1 2-1 1-2-1v1h-1v-9h1v3h3l1 3zm-1 0l-1-2h-1l-1 1v2l1 1 1-1 1-1z"/></g></g><g id="Space"><path id="Vector 5_4" fill="#212133" d="M231 256v-2l-6-6a1 1 0 10-2 1l6 6-6 6a1 1 0 102 1l6-6zm-24-2a1 1 0 000 2v-2zm24 0h-24v2h24v-2z"/><path id="Vector_3" fill="#33BCEB" d="M178 289v7c0 6 4 10 10 10h318c6 0 10-4 10-10v-7c0-6-4-10-10-10H188c-6 0-10 4-10 10z"/><path id="Rectangle 2_6" fill="#00ABE6" d="M178 243c0-9 8-17 17-17v52l-17 18v-53z"/><path id="Rectangle 3_6" fill="#00ABE6" d="M516 243c0-9-8-17-17-17v52l17 18v-53z"/><path id="Vector_4" fill="#66CDF0" d="M190 231v43c0 6 4 10 10 10h294c6 0 10-4 10-10v-43c0-3-2-5-5-5H195c-3 0-5 2-5 5z"/></g><g id="ShiftRight"><path id="Vector_5" fill="#33BCEB" d="M763 204v7c0 6 4 10 10 10h230c6 0 10-4 10-10v-7c0-6-4-10-10-10H773c-6 0-10 4-10 10z"/><path id="Rectangle 2_7" fill="#00ABE6" d="M763 158c0-9 8-17 17-17v52l-17 18v-53z"/><path id="Rectangle 3_7" fill="#00ABE6" d="M1013 158c0-9-8-17-17-17v52l17 18v-53z"/><path id="Vector_6" fill="#66CDF0" d="M775 146v43c0 6 4 10 10 10h206c6 0 10-4 10-10v-43c0-3-2-5-5-5H780c-3 0-5 2-5 5z"/><path id="Vector 11" stroke="#212133" stroke-linejoin="round" stroke-width="2" d="M949 182l1 1h12l1-1v-11h5a1 1 0 001-2l-12-12h-2l-12 12a1 1 0 001 2h5v11z"/></g><g id="ShiftLeft"><path id="Vector 5_5" fill="#212133" d="M53 178v-2l-6-6a1 1 0 10-2 1l6 6-6 6a1 1 0 102 1l6-6zm-24-2a1 1 0 000 2v-2zm24 0H29v2h24v-2z"/><path id="Vector_7" fill="#33BCEB" d="M0 211v7c0 6 4 10 10 10h118c6 0 10-4 10-10v-7c0-6-4-10-10-10H10c-6 0-10 4-10 10z"/><path id="Rectangle 2_8" fill="#00ABE6" d="M0 165c0-9 8-17 17-17v52L0 218v-53z"/><path id="Rectangle 3_8" fill="#00ABE6" d="M138 165c0-9-8-17-17-17v52l17 18v-53z"/><path id="Vector_8" fill="#66CDF0" d="M12 153v43c0 6 4 10 10 10h94c6 0 10-4 10-10v-43c0-3-2-5-5-5H17c-3 0-5 2-5 5z"/><path id="Vector 12" stroke="#212133" stroke-linejoin="round" stroke-width="2" d="M34 189l1 1h12l1-1v-11h5a1 1 0 001-2l-12-12h-2l-12 12a1 1 0 001 2h5v11z"/></g><g id="Enter"><path id="Rectangle 4_5" fill="#33BCEB" d="M930 63c0-6 4-10 10-10h61c6 0 10 4 10 10v7c0 6-4 10-10 10h-61c-6 0-10-4-10-10v-7z"/><path id="Rectangle 2_9" fill="#00ABE6" d="M930 17c0-9 8-17 17-17v52l-17 18V17z"/><path id="Rectangle 3_9" fill="#00ABE6" d="M1011 17c0-9-8-17-17-17v52l17 18V17z"/><path id="Rectangle 4_6" fill="#33BCEB" d="M930 119c0-6 4-10 10-10h61c6 0 10 4 10 10v7c0 6-4 10-10 10h-61c-6 0-10-4-10-10v-7z"/><path id="Rectangle 2_10" fill="#00ABE6" d="M930 73c0-9 8-17 17-17v52l-17 18V73z"/><path id="Rectangle 3_10" fill="#00ABE6" d="M1011 73c0-9-8-17-17-17v52l17 18V73z"/><path id="Rectangle 4_7" fill="#33BCEB" d="M861 119c0-6 4-10 10-10h71v27h-71c-6 0-10-4-10-10v-7z"/><path id="Rectangle 2_11" fill="#00ABE6" d="M861 73c0-9 8-17 17-17v52l-17 18V73z"/><path id="Union" fill="#66CDF0" d="M942 5c0-3 2-5 5-5h47c3 0 5 2 5 5v99c0 6-4 10-10 10H883c-6 0-10-4-10-10V61c0-3 2-5 5-5h59c3 0 5-2 5-5V5z"/><path id="Vector 6_3" fill="#212133" d="M934 86v-2l7-6a1 1 0 111 1l-6 6 6 6a1 1 0 11-1 1l-7-6zm36-44a1 1 0 012 0h-2zm-35 42h28v2h-28v-2zm35-7V42h2v35h-2zm-7 7c3 0 7-3 7-7h2c0 5-5 9-9 9v-2z"/></g></g>`;
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
    'Enter': false
}

const validKeys = Object.keys(keyStates);

const keyboard = document.createElementNS(SVGNS, "svg");
keyboard.innerHTML = keyboardContent;
keyboard.setAttributeNS(null, "viewBox", "0 0 1013 306");
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