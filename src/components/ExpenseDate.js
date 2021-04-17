import './ExpenseDate.css';

function ExpenseDate({ date }) {
    const expenseDate = date.toLocaleString('en-us', { month: 'long' });
    const day = date.toLocaleString('en-us', { day: '2-digit' });
    const year = date.getFullYear();
    return <div className="expense-date">
        <div className="expense-date__month">{expenseDate}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
    </div>

}
export default ExpenseDate