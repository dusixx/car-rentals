import { ListPrimary, ListSecondary } from './DataList.styled';
import { arrayOf, number, object } from 'prop-types';

export const DataList = ({ items, listType = 1, ...props }) => {
  const List = listType === 1 ? ListPrimary : ListSecondary;

  return (
    <List {...props}>
      {items.map((itm, idx) => itm && <li key={idx}>{itm}</li>)}
    </List>
  );
};

DataList.propTypes = {
  items: arrayOf(object),
  listType: number,
};
