/* eslint-disable camelcase */
import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Loader } from '../../components/Loader';
import {
  Container,
  Search,
  Logo,
  Wrapper,
  CarouselTitle,
  Carousel,
  ModalTitle,
  ModalContent,
} from './styles';
import { ImageCard } from '../../components/ImageCard';
import { RestaurantCard } from '../../components/RestaurantCard';
import { Modal } from '../../components/Modal';
import Map from '../../components/Map';
import { Skeleton } from '../../components/Skeleton';

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  adaptiveHeight: true,
};

export function Home() {
  const { restaurants, restaurantSelected } = useSelector((state) => {
    return state.restaurants;
  });
  const [text, setText] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [placeId, setPlaceId] = useState('');
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(text);
    }
  }
  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }
  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo" />
          <TextField
            outlined
            label="Pesquisar"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={text}
              onChange={(e) => setText(e.currentTarget.value)}
              onKeyPress={handleKeyPress}
            />
          </TextField>

          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua Área</CarouselTitle>
              <Carousel {...settings}>
                {restaurants.map((restaurant) => {
                  return (
                    <ImageCard
                      title={restaurant.name}
                      photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                    />
                  );
                })}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              restaurant={restaurant}
              onClick={() => handleOpenModal(restaurant.place_id)}
            />
          );
        })}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal
        open={modalOpened}
        onClose={() => setModalOpened(!modalOpened)}
        restaurantSelected={restaurantSelected}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>
              {restaurantSelected?.opening_hours ? 'Aberto agora' : 'Fechado'}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
}
