import { DaysOfWeek } from "../enums/days-of-week.js";
import { Transaction } from "../models/transaction.js";
import { Transactions } from "../models/transactions.js";
import { MessageView } from "../views/message-view.js";
import { TransactionsView } from "../views/transactions-view.js";

export class TransactionController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private transactions = new Transactions();
    private transactionsView = new TransactionsView('#transactionsView', true);
    private messageView = new MessageView('#messageView');

    constructor() {
        this.inputDate = document.querySelector('#date') as HTMLInputElement;
        this.inputQuantity = document.querySelector('#quantity') as HTMLInputElement;
        this.inputValue = document.querySelector('#value') as HTMLInputElement;
        this.transactionsView.update(this.transactions);
    }

    public add(): void {

        const transaction = Transaction.create(
                this.inputDate.value,
                this.inputQuantity.value,
                this.inputValue.value
            );
        if (!this.isBusinessDay(transaction.date)) {
            this.messageView.update('Negotiations can only be conducted on business days!');
            return;
        }
        this.transactions.add(transaction);
        this.cleanForm();
        this.updateView();
    }

    private isBusinessDay(date: Date): boolean {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
    }

    private cleanForm(): void {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }

    private updateView(): void {
        this.transactionsView.update(this.transactions);
        this.messageView.update('Transaction added successfully!');
    }
}