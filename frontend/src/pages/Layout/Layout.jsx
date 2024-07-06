import { Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import Header from "../../components/Header/Header";

const Home = () => {
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
