import './Expenses.css';
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import { useState } from 'react'

import ExpensesFilter from './ExpenseFilter';


const Expenses = ({ expenses }) => {
    const [selected, setSelected] = useState('')

    const yearPicker = (e) => {

        setSelected(e.target.value)
    }
    // const filteredexpense = (expenses => {
    //     return expenses.date.getFullYear() === selected
    // })
    console.log(selected);
    return <Card className="expenses">
        <ExpensesFilter selected={selected} yearPicker={yearPicker} />

        {expenses.map((item) => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)}
    </Card>

}
export default Expenses;