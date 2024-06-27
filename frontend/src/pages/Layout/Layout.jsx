import { Navigate, Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className={styles.background}>
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
