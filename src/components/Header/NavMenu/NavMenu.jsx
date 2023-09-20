import { Nav, NavLinkStyled } from './NavMenu.styled';
import { func } from 'prop-types';

const items = {
  home: '/',
  'car park': '/catalog',
  favorites: '/favorites',
};

// !! если не указать дефолтное для onItemClick -
// перерисовывает меню на каждый клик
export const NavMenu = ({ onItemClick = Function.prototype }) => {
  return (
    <Nav>
      {Object.entries(items).map(([name, url]) => (
        <NavLinkStyled
          key={name}
          to={url}
          onClick={() => onItemClick(name, url)}
        >
          {name}
        </NavLinkStyled>
      ))}
    </Nav>
  );
};

NavMenu.propTypes = {
  onItemClick: func,
};
