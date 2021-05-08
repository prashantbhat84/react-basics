import './Expenses.css';
import ExpensesList from './ExpensesList'
import Card from '../UI/Card'
import { useState } from 'react'

import ExpensesFilter from './ExpenseFilter';


const Expenses = ({ expenses }) => {
    const [selected, setSelected] = useState('2020')

    const yearPicker = (e) => {

        setSelected(e.target.value)
    }



    const filteredArray = expenses.filter(expense => {

        return expense.date.getFullYear().toString() === selected
    })



    return <Card className="expenses">
        <ExpensesFilter selected={selected} yearPicker={yearPicker} />
        <ExpensesList items={filteredArray} />
    </Card>

}
export default Expenses;