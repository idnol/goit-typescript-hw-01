import { concatenation } from "./concatenation";

const button = document.querySelector('button');
const input = document.querySelector('input');

if (button && input) {
    button.addEventListener('click', function () {
        concatenation(input.value, 'Hello');
    })
}