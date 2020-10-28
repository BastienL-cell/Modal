"use strict";

const MODAL_TEXT = "Modal text goes here";




const EVENT_ONCLICK = document.querySelector("#event");
const DIV = document.querySelector("#content")



EVENT_ONCLICK.addEventListener('click', () => {
    const MODAL = document.createElement('div');
    const MAIN_CONT = document.querySelector("#main-container");

    MODAL.classList.add('modal');
    MODAL.innerHTML = `
    <div class="modal-content">
        <p>${MODAL_TEXT}</p>
        <span id="close-btn">X</span>
        <button id="modal-button" class="btn">Ok</button>
    </div>`
    DIV.append(MODAL);
    MAIN_CONT.classList.add('blured');

    const MODAL_BTN = document.querySelector('#modal-button');
    const CLOSE_BTN = document.querySelector('#close-btn');

    MODAL_BTN.addEventListener('click', () => {
        DIV.removeChild(MODAL)
        MAIN_CONT.classList.remove('blured');
    });

    CLOSE_BTN.addEventListener('click', () => {
        DIV.removeChild(MODAL)
        MAIN_CONT.classList.remove('blured');
    });
})
