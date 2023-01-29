import { updateUI } from "../src/client/js/updateUI"
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("Testing the validateForm functionality", () => {
    test("Testing the validateForm function", () => {

        const dom = new JSDOM(`<div id="dashboard"></div>`);

        // test input
        const testInp = {
            from: '',
            to: 'paris',
            departDate: '23-01-2023',
            returnDate: ''
        }
        const block = dom.window.document.getElementById('dashboard');
        const valid = false;

        updateUI(block,valid, testInp);
        expect(block.innerHTML).toBe("<h1 class=\"error\"> Please fill out all the 4 fields </h1>");
    })});