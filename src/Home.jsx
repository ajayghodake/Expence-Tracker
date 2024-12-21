import React, { useState, useEffect } from 'react';
import styles from "./Home.module.css";
import Card from "./components/Card/Card";
import PieChartComponent from "./components/PieChart/PieChartComponent";
import Modal from './components/Modal/Modal';
import AddIncome from './components/Form/AddIncome/AddIncome';
import AddExpenses from './components/Form/AddExpenses/AddExpenses';
import BarChartComponent from "./components/BarChart/BarChartComponent";
import Transactions from './components/Transactions/Transactions';


// CustomHook to store and get user values Loacally
const useLocalStorage = (key, initBalance) => {
  const [storedValue, setStoredValue] = useState(() => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initBalance;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

const CategoriesCalulation = (expenses) => {
   return expenses.reduce((acc, item )=> {
    acc.spends[item.category] = (acc.spends[item.category] || 0) + Number(item.price);
    acc.quantities[item.category] = (acc.spends[item.category] || 0) + 1;
    return acc;
  }, {
    spends: {food: 0, entertainment: 0, travel: 0},
    quantities: {food: 0, entertainment: 0, travel: 0},
  })
}

const Home = () => {
const [balance, setBalance] = useLocalStorage("balance", 5000);
const [expenses, setExpenses] = useLocalStorage("expenses", []);
console.log('expenses', expenses);

const [isOpenAddIncome, setIsOpenAddIncome] = useState(false);
const [isOpenAddExpenses, setIsOpenAddExpenses] = useState(false);

    const {spends: categorySpend, quantities: categoryQuantity} = CategoriesCalulation(expenses);

    const expenseAmt =  expenses.reduce((total, item) => total + Number(item.price), 0)

    const handleAddIncome = () => {
      setIsOpenAddIncome(true);
    }
    const handleAddExpenses = () => {
      setIsOpenAddExpenses(true);
    }

  return (
    <div className={styles.container}>
      <h1>Expense Tracker</h1>

      <div className={styles.cardsWrapper}>
        <Card title="Wallet Balance" amount={balance} btnText="+ Add Income" btnType="success" handleClick={handleAddIncome}/>
        <Card title="Expenses" amount={expenseAmt} btnText="+ Add Expenses" btnType="failure" handleClick={handleAddExpenses} success={false}/>
        <PieChartComponent data={[
          { name: "Food", value: categorySpend.food },
          { name: "Entertainment", value: categorySpend.entertainment },
          { name: "Travel", value: categorySpend.travel },
        ].filter((item) => item.value)}/>
      </div>

      <div className={styles.transactionsWrapper}>

        <Transactions title="Recent Transactions" transactions={expenses} editTransactions={setExpenses} balance={balance} setBalance={setBalance}/>
        
        <BarChartComponent data={[
            { name: "Food", value: categoryQuantity.food },
            { name: "Entertainment", value: categoryQuantity.entertainment },
            { name: "Travel", value: categoryQuantity.travel },
          ].filter((item) => item.value)}/>




      </div>
       
      
      <Modal isOpen={isOpenAddIncome} setIsOpen={setIsOpenAddIncome}>
        <AddIncome setIsOpen={setIsOpenAddIncome} setBalance={setBalance}/>
      </Modal>
      <Modal isOpen={isOpenAddExpenses} setIsOpen={setIsOpenAddExpenses}>
        <AddExpenses setIsOpen={setIsOpenAddExpenses} balance={balance} setBalance={setBalance} expenses={expenses} setExpenses={setExpenses}/>
      </Modal>
      


    </div>

        
  );
};

export default Home;
