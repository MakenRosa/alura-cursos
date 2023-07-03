import { DaysOfWeek } from "../enums/days-of-week.js";
import { Transaction } from "../models/transaction.js";
import { Transactions } from "../models/transactions.js";
import { MessageView } from "../views/message-view.js";
import { TransactionsView } from "../views/transactions-view.js";
export class TransactionController {
    constructor() {
        this.transactions = new Transactions();
        this.transactionsView = new TransactionsView('#transactionsView', true);
        this.messageView = new MessageView('#messageView');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.transactionsView.update(this.transactions);
    }
    add() {
        const transaction = Transaction.create(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isBusinessDay(transaction.date)) {
            this.messageView.update('Negotiations can only be conducted on business days!');
            return;
        }
        this.transactions.add(transaction);
        this.cleanForm();
        this.updateView();
    }
    isBusinessDay(date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    updateView() {
        this.transactionsView.update(this.transactions);
        this.messageView.update('Transaction added successfully!');
    }
}
