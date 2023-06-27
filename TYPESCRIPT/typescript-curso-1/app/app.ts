import { TransactionController } from "./controllers/transaction-controller.js";

const controller = new TransactionController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.add();
    });
} else {
    throw Error('It was not possible to initiate application. Check if form exists.');
}

