import React, { useState } from 'react'
import styles from "./AddExpenses.module.css";
import Button from '../../Button/Button';
import { useSnackbar } from 'notistack';


export default function AddExpenses({setIsOpen, balance, setBalance, expenses, setExpenses, editId}) {
  const { enqueueSnackbar }= useSnackbar();

  const initExpenses = editId ? expenses.find((item)=> item.Id === editId) : {
        title: "",
        category: "",
        price: "",
        date: "",
  };

    const [data, setData] = useState(initExpenses);

    const handleChange = (e) => {
      const name = e.target.name;
      setData((prev) => ({...prev, [name]: e.target.value }));
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(balance < Number(data.price)){
        enqueueSnackbar("Price should be less than Wallet Balance", {variant: "warning"});
        setIsOpen(false);
        return;
      }

      setBalance((prevBal) => prevBal - Number(data.price));

      const prevId = expenses.length > 0 ? expenses[0].id : 0;

      setExpenses((prev) => [{...data, id: prevId + 1}, ...prev]);

      setData({
        title: "",
        category: "",
        price: "",
        date: "",
      });

      setIsOpen(false);
    }

    
    const handleEdit = () => {}

  return (
    <div className={styles.formWrapper}>
      <h3>{editId ? "Edit Expenses": "Add Expenses"}</h3>

      <form onSubmit={editId ? handleEdit : handleSubmit}>

        <input type="test" name='title' value={data.title} placeholder='Title' onChange={handleChange} required/>

        <input type="number" name='price' value={data.price} placeholder='Price' onChange={handleChange} required/>

        <select name="category" value={data.category} onChange={handleChange} required>
            <option value="" disabled selected>Select Category</option>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment</option>
            <option value="travel">Travel</option>
        </select>

        <input type="date" name='date' value={data.date} onChange={handleChange}/>

        <Button type='submit' style='primary' shadow>{editId ? "Edit Expenses": "Add Expenses"}</Button>
        <Button style='secondary' handleClick={()=>setIsOpen(false)} shadow>Cancel</Button>

      </form>
    </div>
  )
}
