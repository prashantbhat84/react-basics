import './Expenses.css';
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import { useState } from 'react'

import ExpensesFilter from './ExpenseFilter';


const Expenses = ({ expenses }) => {
    const [selected, setSelected] = useState('2020')

    const yearPicker = (e) => {

        setSelected(e.target.value)
    }


    let filteredArray = []
    filteredArray = expenses.filter(expense => {
        console.log('inside filter');
        return expense.date.getFullYear().toString() === selected
    })


    return <Card className="expenses">
        <ExpensesFilter selected={selected} yearPicker={yearPicker} />

        {filteredArray.map((item) => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)}
    </Card>

}
export default Expenses;