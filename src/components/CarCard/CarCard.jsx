import { useState } from 'react';
import { DataList } from '../DataList/DataList';
import { CarCaption } from './CarCaption';
import { AddToFavs } from '../AddToFavs/AddToFavs';
import { splitNumIntoTriads } from 'helpers';
import { func, bool } from 'prop-types';
import * as api from 'api';

import {
  Card,
  Thumb,
  Photo,
  Title,
  LearnMoreBtn,
  AddToFavsWrapper,
  Overlay,
} from './CarCard.styled';

export const CarCard = ({
  onDetailsClick,
  onAddToFavsClick,
  favorite,
  ...props
}) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const {
    id,
    img,
    make,
    model,
    rentalPrice,
    rentalCompany,
    type,
    year,
    mileage,
    address,
    accessories = [],
    functionalities = [],
  } = props;

  const [city, country] = address?.split(/\s*,\s*/).slice(-2) ?? '';
  const alt = `${make} ${model}`;

  const handleAddToFavsClick = () => {
    setIsFavorite(cur => !cur);
    api.updateFavoriteById(id, !isFavorite);
    onAddToFavsClick(!isFavorite);
  };

  return (
    <Card>
      <Thumb>
        {img && <Photo src={img} alt={alt}></Photo>}
        <Overlay />
        <AddToFavsWrapper>
          <AddToFavs onClick={handleAddToFavsClick} value={isFavorite} />
        </AddToFavsWrapper>
      </Thumb>

      <Title>
        <CarCaption {...{ make, model, year }} />
        <span>{rentalPrice}</span>
      </Title>

      <DataList
        // минимальный
        style={{ marginBottom: 15 }}
        items={[
          city,
          country,
          rentalCompany,
          type,
          model,
          splitNumIntoTriads(mileage, ','),
          accessories[0],
          functionalities[0],
        ]}
      />
      <LearnMoreBtn onClick={onDetailsClick}>Learn more</LearnMoreBtn>
    </Card>
  );
};

CarCard.propTypes = {
  onDetailsClick: func,
  onAddToFavsClick: func,
  favorite: bool,
};
