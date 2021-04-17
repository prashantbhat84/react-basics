import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'
function ExpenseItem({ date, title, amount }) {
    const expenseTitle = title;
    const expenseAmount = amount;
    return <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">Rs {expenseAmount} /-</div>
        </div>

    </Card>

}
export default ExpenseItem;