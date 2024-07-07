import React, { useEffect, useState } from 'react';
import styles from './Reviews.module.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Review from '../../../components/Review/Review';
import Stars from '../../../components/Stars/Stars';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      "user": "Adarsh Yadav",
      "rating": 8.5,
      "date": "Sun Jul 07 2024 11:54:48 GMT+0530 (India Standard Time)",
      "comment": "amazing experience",
      "id": "1",
      "_id": "668a34b05226e157761ea31e"
    }
  ]);
  const [averageRating, setAverageRating] = useState(10);
  const restaurantId = useSelector(state => state.user._id);

  useEffect(() => {
    axios.get(`/api/review/${restaurantId}/getReviews/all`)
      .then(res => setReviews(res.data))
      .catch(err => console.log(err.message));
  }, [restaurantId]);

  useEffect(()=>{
    let sum = 0;
    reviews.map((review,index)=>{
      sum+= Number.parseFloat(review.rating);
    })

    setAverageRating((sum/ reviews.length).toFixed(1));
  })

  return (
    <>
      <div className={styles.top}>
        <h1 className={styles.heading}>Reviews</h1>
        <p>Average Rating : <span className='text-[orange]'>{averageRating}</span>/10</p>
        <Stars number={averageRating}/>
      </div>
      <div className={styles.reviewsContainer}>
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    </>
  );
};

export default Reviews;
