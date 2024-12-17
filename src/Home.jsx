import styles from "./Home.module.css";
import Card from "./components/Card/Card";
import PieChartComponent from "./components/PieChart/PieChartComponent";
import BarChartComponent from "./components/BarChart/BarChartComponent";
const Home = () => {



    const handleAddBalance = () => {}

    const handleExpenses = () => {}

  return (
    <div className={styles.container}>
      <h1>Expense Tracker</h1>

      <div className={styles.cardsWrapper}>
        <Card title="Wallet Balance" amount="5000" btnText="+ Add Income" btnType="success" handleClick={handleAddBalance}/>
        <Card title="Expenses" amount="500" btnText="+ Add Expenses" btnType="failure" handleClick={handleExpenses} success={false}/>
        <PieChartComponent/>
      </div>
      
    </div>

  );
};

export default Home;
