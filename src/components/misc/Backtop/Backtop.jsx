import { string, number } from 'prop-types';
import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import { IoIosArrowUp as IconArrowUp } from 'react-icons/io';
import { BacktopBtn } from './Backtop.styled';

const THROTTLE_DELAY = 500;
const BTN_TITLE = 'Go to Top';
const ICON_SIZE = '60%';

export const Backtop = ({
  scrollBehavior = 'smooth',
  threshold = 700,
  ...restProps
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener(
      'scroll',
      throttle(() => {
        setVisible(window.scrollY > threshold);
      }, THROTTLE_DELAY)
    );
  }, [threshold]);

  const handleBacktopClick = () => {
    window.scrollTo({ top: 0, behavior: scrollBehavior });
  };

  return (
    <BacktopBtn
      visible={visible}
      onClick={handleBacktopClick}
      title={BTN_TITLE}
      {...restProps}
    >
      <IconArrowUp size={ICON_SIZE} />
    </BacktopBtn>
  );
};

Backtop.propType = {
  scrollBehavior: string,
  threshold: number,
};
