import styles from './RestaurentCard.module.css'

const RestaurentCard = ({restaurent = {id: 1, title: 'nothing'}}) => {
  return (
    <div className={`${styles.card}`} style={{background: `url(${restaurent.restaurant_img}) no-repeat center center/cover`}}>
        {/* <img className={`${styles.fancyShadow}`} src={`/images/restaurentCoverPhotos/restaurent${restaurent.id}.jpg`} alt="<-" /> */}
        <div className={`${styles.title}`}>{restaurent.title}</div>
    </div>
  )
}

export default RestaurentCard