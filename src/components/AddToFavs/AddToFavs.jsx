/* eslint-disable react/prop-types */
import { AddToFavsBtn } from './AddToFavs.styled';
import { ReactComponent as IconHeartOutline } from '../../images/heart-outline.svg';
import { ReactComponent as IconHeartFilled } from '../../images/heart-filled.svg';

export const AddToFavs = ({ value, onClick }) => {
  return (
    <AddToFavsBtn onClick={onClick}>
      {value ? <IconHeartFilled /> : <IconHeartOutline />}
    </AddToFavsBtn>
  );
};
