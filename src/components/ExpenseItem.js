import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
function ExpenseItem({ date, title, amount }) {
    const expenseTitle = title;
    const expenseAmount = amount;
    return <div className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">Rs {expenseAmount} /-</div>
        </div>

    </div>

}
export default ExpenseItem;