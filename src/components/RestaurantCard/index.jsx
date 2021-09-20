import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Restaurant, RestaurantInfo, Title, Address, RestauranteImage } from './styles';
import imagem from '../../assets/restaurante-fake.png';
import { Skeleton } from '../Skeleton';

export function RestaurantCard({ restaurant, onClick }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          isHalf
          edit={false}
          value={restaurant.rating}
          size={24}
          activeColor="#ffd700"
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestauranteImage
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : imagem}
        alt="foto do restaurante"
        onLoad={() => {
          setImageLoaded(true);
        }}
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
}
