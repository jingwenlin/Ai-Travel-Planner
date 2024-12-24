// import React from 'react'
// import PlaceCardItem from './PlaceCardItem'

// function PlacesToVisit({trip}) {
//   return (
//     <div>
//         <h2 className='font-bold text-lg'>Places to Visit</h2>
    
//         <div>
//             {trip.tripData?.itinerary.map((item,index)=>(
//                 <div className='mt-5'>
//                     <h2 className='font-medium text-lg'>{item.day}</h2>
//                     <div className='grid md:grid-cols-2 gap-5'>
//                     {item.plan.map((place,index)=>(
//                             <div className='my-3'>
//                                 <h2 className='font-medium text-sm text-orange-600'>{place.time}</h2>
//                                 <PlaceCardItem place={place} />
//                             </div>
//                     ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default PlacesToVisit

import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  const itinerary = trip?.tripData?.itinerary;

  // Convert itinerary to an array if it's an object, or use it directly if it's already an array
  const itineraryArray = Array.isArray(itinerary)
    ? itinerary
    : itinerary
    ? Object.entries(itinerary).map(([key, value]) => ({
        day: key,
        ...value,
      }))
    : [];

  // Handle case where itinerary is empty or invalid
  if (!itineraryArray.length) {
    return <p className="text-gray-500">No itinerary data available.</p>;
  }

  return (
    <div>
      <h2 className="mt-3 font-bold text-lg">Places to Visit</h2>
      <div>
        {itineraryArray.map((item, index) => (
          <div className="mt-2" key={index}>
            <h2 className="font-medium text-lg">{item.day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {Array.isArray(item.plan) ? (
                item.plan.map((place, index) => (
                  <div className="my-2" key={index}>
                    <h2 className="font-medium text-sm text-orange-600">{place.time}</h2>
                    <PlaceCardItem place={place} />
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No places available for this day.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;


