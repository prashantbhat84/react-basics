import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import AddNewExpense from './components/NewExpense/AddNewExpense'
import { useState } from 'react'
const DUMMY_EXPRENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPRENSES);
  const [showForm, setShowForm] = useState(false);
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense]
    })

  }
  const addFormExpenseHandler = () => {
    setShowForm(prevState => {
      return !prevState;
    })
  }
  const resetForm = () => {
    setShowForm(false);
  }

  let formDisplay = <AddNewExpense changedisplay={addFormExpenseHandler} />;
  if (showForm) {
    formDisplay = <NewExpense resetForm={resetForm} addNewExpense={addExpenseHandler} />;
  }

  return (
    <div>

      {formDisplay}
      <Expenses expenses={expenses} />

    </div>
  );
}

export default App;