import React, { useState, useEffect } from 'react';
import styles from "./Home.module.css";
import Card from "./components/Card/Card";
import PieChartComponent from "./components/PieChart/PieChartComponent";
import Modal from './components/Modal/Modal';
// import BarChartComponent from "./components/BarChart/BarChartComponent";


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

const Home = () => {
const [balance, setBalance] = useLocalStorage("balance", 5000);
const [expenses, setExpenses] = useLocalStorage("expenses", []);

const [isOpenAddIncome, setIsOpenAddIncome] = useState(false);
const [isOpenAddExpenses, setIsOpenAddExpenses] = useState(false)

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
        <Card title="Expenses" amount={expenses} btnText="+ Add Expenses" btnType="failure" handleClick={handleAddExpenses} success={false}/>
        <PieChartComponent/>
      </div>


      <Modal isOpen={isOpenAddExpenses} setIsOpen={setIsOpenAddExpenses}>
        Hello I am Modal
      </Modal>
      <Modal isOpen={isOpenAddIncome} setIsOpen={setIsOpenAddIncome}>
        Hello I am Modal
      </Modal>
      
    </div>

  );
};

export default Home;
