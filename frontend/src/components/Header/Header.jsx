import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={`${styles.nav}`}>
        <img src="/icons/icon3.png" alt="food" className={`${styles.icon}`}/>
        <div className={`${styles.title}`}>DigiDine</div>
        <img className={`${styles.icon}`} style={{filter: "invert(0)"}} src="/icons/avatar.png" alt="avatar"/>
    </div>
  )
}

export default Header