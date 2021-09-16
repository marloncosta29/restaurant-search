import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  padding: 1rem;
`;

export const Logo = styled.img`
  margin-bottom: 1rem;
`;

export const Map = styled.div`
  background-color: red;
  flex: 1;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 1rem;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  margin: 1rem 0;
`;
