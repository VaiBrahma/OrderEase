import React from 'react'
import styles from './Tables.module.css'
import { useSelector } from 'react-redux';
import TableComponent from '../../../components/TableComponent/TableComponent';

const Tables = () => {
  const restaurant = useSelector((state)=>{return state.user}) || {no_of_tables: 0};
  const tables = Array.from({ length: restaurant.no_of_tables }, (_, index) => `Item ${index + 1}`);
  return (
    <div className={styles.gridContainer}>
      {tables.map((item, index) => (<div key={index}><TableComponent table_no={index + 1}/></div>))}
    </div>
  )
}

export default Tables