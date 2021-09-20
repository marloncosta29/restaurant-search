import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';

export const MapContainer = (props) => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => {
    return state.restaurants;
  });
  const [map, setMap] = useState(null);
  const { google, query, placeId } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function searchbyQuery(query) {
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: map.center,
      radius: '200',
      type: ['restaurant'],
      query,
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  }

  useEffect(() => {
    if (query) {
      searchbyQuery(query);
    }
  }, [query, searchbyQuery]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function getRestaurantDetails(placeId) {
    const service = new google.maps.places.PlacesService(map);
    const request = {
      placeId,
      fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
    };

    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurant(place));
      }
    });
  }
  useEffect(() => {
    if (placeId) {
      getRestaurantDetails(placeId);
    }
  }, [placeId, getRestaurantDetails]);
  function searchNearBy(map, center) {
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearBy(map, map.center);
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      {...props}>
      {restaurants.map((restaurant) => {
        return (
          <Marker
            key={restaurant.place_id}
            name={restaurant.name}
            position={{
              lat: restaurant.geometry.location.lat(),
              lng: restaurant.geometry.location.lng(),
            }}
          />
        );
      })}
      <Marker />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
