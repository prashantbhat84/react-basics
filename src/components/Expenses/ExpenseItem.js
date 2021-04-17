import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import { useState } from 'react'
const ExpenseItem = ({ date, title, amount }) => {
    const [title1, setTitle1] = useState(title)

    const expenseAmount = amount;
    const buttonClicked = (event) => {
        setTitle1("Updated");


    }
    return <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
            <h2>{title1}</h2>
            <div className="expense-item__price">Rs {expenseAmount} /-</div>
        </div>
        <button onClick={buttonClicked}>Change title</button>

    </Card>

}
export default ExpenseItem;