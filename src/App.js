import React, { useState } from 'react';
import RatingReview from './Components/RatingReview';


function App() {
  const [rating, setRating] = useState(0)
  return (
    <>
      <div>
        <RatingReview rating={rating} setRating={setRating
        } />
      </div>
    </>
  )
}
export default App;
