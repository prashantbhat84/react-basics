import './ExpensesList.css';
import ExpenseItem from './ExpenseItem'
const ExpensesList = ({ items }) => {

    if (items.length === 0) {
        return <p className="expenses-list__fallback">No Expenses found</p>
    }
    return <ul className="expenses-list">
        {items.map((item) => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)}
    </ul>
}
export default ExpensesList;