import { View } from "./view.js";
export class TransactionsView extends View {
    template(model) {
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
                    <td>${transaction.volume}</td>`;
        }).join('')}
            </tbody>

        </table>
        `;
    }
    format(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
