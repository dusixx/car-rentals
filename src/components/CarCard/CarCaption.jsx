import { Caption } from './CarCard.styled';

export const CarCaption = ({ make, model, year, ...props }) => {
  return (
    <Caption {...props}>
      {make}
      <span data-model> {model}</span>
      {year && `, ${year}`}
    </Caption>
  );
};
