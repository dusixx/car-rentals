import { bool, func } from 'prop-types';
import { AddToFavsBtn } from './AddToFavs.styled';
import { ReactComponent as IconHeartOutline } from '../../images/heart-outline.svg';
import { ReactComponent as IconHeartFilled } from '../../images/heart-filled.svg';

export const AddToFavs = ({ value, onClick }) => {
  return (
    <AddToFavsBtn onClick={onClick}>
      {value ? <IconHeartFilled fill="#ffa537" /> : <IconHeartOutline />}
    </AddToFavsBtn>
  );
};

AddToFavs.propTypes = {
  value: bool,
  onClick: func,
};
