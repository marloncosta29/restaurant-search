import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Restaurant, RestaurantInfo, Title, Address, RestauranteImage } from './styles';
import imagem from '../../assets/restaurante-fake.png';

export function RestaurantCard() {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome Restaurante</Title>
        <ReactStars count={5} isHalf edit={false} value={4} size={24} activeColor="#ffd700" />
        <Address>Endereço</Address>
      </RestaurantInfo>
      <RestauranteImage src={imagem} alt="foto do restaurante" />
    </Restaurant>
  );
}
