import CSS from './index.module.css';

const Review = ({ reviewData }) => {
  return (
    reviewData && (
      <ul className={CSS.reviewsList}>
        {reviewData.map(review => (
          <li key={review.id}>
            <h3 className={CSS.reviewAuthorTitle}>
              Author: {review.author_details.username}
            </h3>
            <p className={CSS.reviewContent}>{review.content}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Review;
