/* eslint-disable react/prop-types */
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { CarList } from '../components/CarList/CarList';
import { PageTitle, NoItemsFound, ButtonSecondary, theme } from '../styles';
import { useFetchCars } from './useFetchCars';

const Favorites = () => {
  const { cars, setCars, setPage, isLoading, noMoreItems, error, setError } =
    useFetchCars({ favorite: true });

  if (error) {
    toast.error(error.message);
    return setError(null);
  }

  return (
    <>
      <PageTitle>Favorites</PageTitle>

      {!isLoading && !cars.length && (
        <NoItemsFound>No items found</NoItemsFound>
      )}

      <CarList
        items={cars}
        onAddToFavsClick={id =>
          // удаляем при снятии флажка
          setCars(cur => cur.filter(itm => itm.id !== id))
        }
      />
      {!noMoreItems && (
        <ButtonSecondary onClick={() => setPage(cur => cur + 1)}>
          {isLoading ? (
            <BeatLoader size={10} color={theme.colors.blue} />
          ) : (
            'Load more'
          )}
        </ButtonSecondary>
      )}
    </>
  );
};

export default Favorites;
