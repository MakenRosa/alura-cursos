import { Transaction } from "./transaction";

export class Transactions {
    private _transactions: Array<Transaction> = [];

    public add(transaction: Transaction): void {
        this._transactions.push(transaction);
    }

    public list(): ReadonlyArray<Transaction> {
        return this._transactions;
    }
}