import { useState } from 'react';
import Select from 'react-select';
import { func } from 'prop-types';
import { stylesBrand, stylesPrice, components } from './selectStyles';
import { Form, Field, Label, Group, SearchBtn } from './Filters.styled';
import { brands } from '../../data/brands';
import { TextField } from '../TextField/TextField';
import { BiSearch as IconSearch } from 'react-icons/bi';

export const Filters = ({ onSubmit }) => {
  const [data, setData] = useState({
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  });

  const { brand, price, mileageFrom, mileageTo } = data;

  const handleFormSubmit = e => {
    e?.preventDefault();
    onSubmit(data);
  };

  // при очистке любого поля - делаем сабмит для сброса фильтра

  const handleBrandChange = val => {
    const brand = val?.label ?? '';
    setData({ ...data, brand });
    if (!val) onSubmit({ ...data, brand: '' });
  };

  const handlePriceChange = val => {
    const price = parseInt(val?.label) || '';
    setData({ ...data, price });
    if (!val) onSubmit({ ...data, price: '' });
  };

  const handleMileageFromChange = e => {
    const { value } = e.target;
    setData({ ...data, mileageFrom: value });
    if (!value) onSubmit({ ...data, mileageFrom: '' });
  };

  const handleMileageToChange = e => {
    const { value } = e.target;
    setData({ ...data, mileageTo: value });
    if (!value) onSubmit({ ...data, mileageTo: '' });
  };

  const brandOptions = brands.map(itm => ({ label: itm }));
  const priceOptions = Array.from({ length: 100 }).map((_, idx) => {
    return {
      label: `${(idx + 1) * 10}$`,
    };
  });

  return (
    <Form autoComplete="off" onSubmit={handleFormSubmit}>
      <Field>
        <Label>Car brand</Label>
        <Select
          isClearable
          styles={stylesBrand}
          components={components}
          options={brandOptions}
          onChange={handleBrandChange}
          value={brand ? { label: brand } : null}
        />
      </Field>
      <Field>
        <Label>Price / 1 hour</Label>
        <Select
          isClearable
          styles={stylesPrice}
          placeholder="To..."
          components={components}
          options={priceOptions}
          onChange={handlePriceChange}
          value={price ? { label: price } : null}
        />
      </Field>
      <Field>
        <Label>Сar mileage / km</Label>
        <Group>
          <TextField
            pattern="^0|[1-9]\d*"
            title="Enter a positive number"
            placeholder="from"
            onChange={handleMileageFromChange}
            value={mileageFrom}
          />
          <TextField
            pattern="^0|[1-9]\d*"
            title="Enter a positive number"
            placeholder="to"
            onChange={handleMileageToChange}
            value={mileageTo}
            style={{
              borderRadius: '0px 14px 14px 0px',
              border: 'none',
            }}
          />
        </Group>
      </Field>
      <SearchBtn
        type="submit"
        disabled={!(brand || price || mileageFrom || mileageTo)}
      >
        <IconSearch size={25} />
      </SearchBtn>
    </Form>
  );
};

Filters.propTypes = {
  onSubmit: func,
};
