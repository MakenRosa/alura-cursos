import { Transactions } from "../models/transactions";
import { View } from "./view.js";

export class TransactionsView extends View<Transactions>{
    protected template(model: Transactions): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>QUANTITY</th>
                    <th>VALUE</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            ${model.list().map(transaction => {
                return `
                <tr>
                    <td>${this.format(transaction.date)}</td>
                    <td>${transaction.quantity}</td>
                    <td>${transaction.value}</td>
                    <td>${transaction.volume}</td>`   
            }).join('')}
            </tbody>

        </table>
        `
    }

    private format(date: Date) {
        return new Intl.DateTimeFormat().format(date)
    }
}