/* eslint-disable react/prop-types */
import { useState } from 'react';
import { toast } from 'react-toastify';
import { CarList } from '../components/CarList/CarList';
import { useFetchCars } from '../hooks/useFetchCars';
import { Filters } from '../components/Filters/Filters';
import { isEmptyFilter } from '../helpers';
import { PageTitle, NoItemsFound } from '../styles';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

const Catalog = () => {
  const [localFilter, setLocalFilter] = useState(null);
  const { cars, setPage, isLoading, noMoreItems, error, setError } =
    useFetchCars();

  if (error) {
    toast.error(error.message);
    return setError(null);
  }

  const handleFilterSubmit = data => {
    setLocalFilter(isEmptyFilter(data) ? null : data);
  };

  let filtered = cars;

  if (localFilter) {
    const { price, mileageFrom, mileageTo, brand } = localFilter;

    filtered = cars.filter(({ mileage, rentalPrice, make }) => {
      const [rent] = rentalPrice.match(/\d+/);
      return (
        (brand ? make === brand : true) &&
        rent <= (parseInt(price) || Infinity) &&
        mileage >= (parseFloat(mileageFrom) || 0) &&
        mileage <= (parseFloat(mileageTo) || Infinity)
      );
    });

    if (filtered.length) toast.info(`${filtered.length} car(s) found`);
  }

  return (
    <>
      <PageTitle>Car park</PageTitle>

      <Filters onSubmit={handleFilterSubmit} />

      {!isLoading && !filtered.length && (
        <NoItemsFound>No cars found</NoItemsFound>
      )}

      <CarList items={filtered} />
      {!localFilter && !noMoreItems && (
        <LoadMoreBtn
          onClick={() => setPage(cur => cur + 1)}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default Catalog;
