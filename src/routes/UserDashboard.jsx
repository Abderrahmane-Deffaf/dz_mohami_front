import React from 'react';
import UserInformations from '../Components/UserInformations';
import UserReviews from '../Components/UserReviews';
const UserDashboard = () => {
  return (
    <div className="p-10">
     <h2>Bonjour %username%</h2>
     <UserInformations/>
     <h3>Reviews</h3>
     <UserReviews/>
     <h3>Bookings</h3>
    </div>
  )
}

export default UserDashboard