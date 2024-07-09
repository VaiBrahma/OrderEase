import styles from "./RestaurantCard.module.css";

const RestaurantCard = ({ restaurant = { id: 1, title: "nothing" } }) => {
  return (
    <div
      className={`${styles.card}`}
      style={{
        background: `url(${restaurant.restaurant_img}) no-repeat center center/cover`,
      }}
    >
      {/* <img className={`${styles.fancyShadow}`} src={`/images/restaurentCoverPhotos/restaurent${restaurent.id}.jpg`} alt="<-" /> */}
      <div className={`${styles.title}`}>{restaurant.title}</div>
    </div>
  );
};

export default RestaurantCard;
