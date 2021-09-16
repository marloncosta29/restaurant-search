import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Container, Search, Logo, Wrapper, CarouselTitle, Carousel } from './styles';
import { ImageCard } from '../../components/ImageCard';
import { RestaurantCard } from '../../components/RestaurantCard';
import { Modal } from '../../components/Modal';
import Map from '../../components/Map';

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  adaptiveHeight: true,
};

export function Home() {
  const [text, setText] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo" />
          <TextField
            outlined
            label="Pesquisar"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={text} onChange={(e) => setText(e.currentTarget.value)} />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <ImageCard title="huhhsdh ushuhdusdh uhsduhdus sdhu" photo={restaurante} />
            <ImageCard title="huhhsdh ushuhdusdh uhsduhdus sdhu" photo={restaurante} />
            <ImageCard title="huhhsdh ushuhdusdh uhsduhdus sdhu" photo={restaurante} />
            <ImageCard title="huhhsdh ushuhdusdh uhsduhdus sdhu" photo={restaurante} />
            <ImageCard title="huhhsdh ushuhdusdh uhsduhdus sdhu" photo={restaurante} />
            <ImageCard title="huhhsdh ushuhdusdh uhsduhdus sdhu" photo={restaurante} />
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
}
