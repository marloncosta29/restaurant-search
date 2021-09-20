import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 1rem;
  background-color: #fff;
  border-left: 5px solid transparent;
  transition: ease all 0.3s;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const RestauranteImage = styled.img`
  border-radius: 6px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  display: ${(props) => (props.imageLoaded ? 'block' : 'none')};
`;
