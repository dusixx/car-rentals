import { Caption } from './CarCard.styled';
import { oneOfType, number, string } from 'prop-types';

export const CarCaption = ({ make, model, year, ...props }) => {
  return (
    <Caption {...props}>
      {make}
      <span data-model> {model}</span>
      {year && `, ${year}`}
    </Caption>
  );
};

CarCaption.propTypes = {
  make: string,
  model: string,
  year: oneOfType([number, string]),
};
