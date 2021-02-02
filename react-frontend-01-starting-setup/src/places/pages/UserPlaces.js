import React from 'react'

import PlaceList from '../components/PlaceList'


const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire States',
    description: 'NEW YORK GREATEST BUILDING',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
    address: 'NEW YORK',
    location: {
      lat: 2354234,
      lng: 2342423423
    },
    creator: 'u1'
  }
]

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES}/>
}

export default UserPlaces;