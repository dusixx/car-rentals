/* eslint-disable react/prop-types */
import { ListPrimary, ListSecondary } from './DataList.styled';

export const DataList = ({ items, listType = 1, ...props }) => {
  const List = listType === 1 ? ListPrimary : ListSecondary;

  return (
    <List {...props}>
      {items.map((itm, idx) => {
        return itm && <li key={idx}>{itm}</li>;
      })}
    </List>
  );
};
