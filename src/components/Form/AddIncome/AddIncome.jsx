
import React, { useState } from 'react'
import styles from "./AddIncome.module.css"
import Button from '../../Button/Button'
import { enqueueSnackbar, useSnackbar } from "notistack";
export default function AddIncome({setIsOpen, setBalance}) {
    const [income, setIncome] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Number(income) < 0){
            enqueueSnackbar("Income should be greater than 0", {variant: "warning"});
        }
        setBalance((prevBal)=> prevBal + Number(income));
        setIsOpen(false);
    }


  return (
    <div className={styles.formWrapper}>
    <h3>Add Income</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" value={income} onChange={((e) => setIncome(e.target.value))} placeholder='Income Amount'/>
        <Button type='submit' style="primary" shadow>Add balance</Button>
        <Button handleClick={()=>setIsOpen(false)} style='secondary' shadow>Cancel</Button>
      </form>
    </div>
  )
}
