import { Link } from 'react-router-dom';
import {
  Banner,
  Title,
  Desc,
  About,
  GetStartedBtn,
  Container,
} from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Banner>
        <About>
          <Title>Find the best rental prices</Title>
          <Desc>
            on luxury, economy, and family rental cars with <span>FREE</span>{' '}
            amendments in <span>over 60000</span> locations worldwide
          </Desc>
          <Link to="/catalog">
            <GetStartedBtn>Find a Car</GetStartedBtn>
          </Link>
        </About>
      </Banner>
    </Container>
  );
};

export default Home;
