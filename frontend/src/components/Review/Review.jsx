import React from 'react';
import styles from './Review.module.css';
import Stars from '../Stars/Stars';

const Review = ({ review }) => {
  const { user, rating, date, comment } = review;
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewHeader}>
        <span className={styles.userName}>{user}</span>
        <span className={styles.reviewDate}>{new Date(date).toLocaleDateString()}</span>
      </div>
      <div className={styles.rating}>Rating: {rating} </div>
      <div className={styles.stars}><Stars number={rating}/></div>
      <div className={styles.comment}>{comment}</div>
    </div>
  );
};

export default Review;
