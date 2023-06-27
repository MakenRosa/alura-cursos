export class Transaction {

    constructor(
        private _date: Date, 
        public readonly quantity: number, 
        public readonly value: number) {}

    get volume(): number {
        return this.quantity * this.value;
    }

    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }

    public static create(dateString: string, quantityString: string, valueString: string): Transaction{
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
        const transaction = new Transaction(date, quantity, value);
        return transaction;
    }
}