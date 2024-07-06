import React from 'react'
import styles from './TableComponent.module.css'

const TableComponent = ({table_no = 0}) => {
  return (
    <button>
        <div className={`${styles.table}`}>
            <div className={`${styles.no}`}>{table_no}</div>
        </div>
    </button>
  )
}

export default TableComponent