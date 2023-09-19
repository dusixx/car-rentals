import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { func, string, bool } from 'prop-types';
import { Backdrop, Container } from './Modal.styled';
import { BodyScrollLock } from '../BodyScrollLock/BodyScrollLock';
import { Transition } from 'react-transition-group';
import { theme } from '../../styles';

const rootModal = document.querySelector('#root-modal');

const defaultStyle = {
  transitionProperty: 'opacity',
  transitionDuration: theme.transition.duration,
  transitionTimingFunction: theme.transition.func,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
};

//
// Modal
//

export const Modal = ({
  children,
  bgColor,
  onClose,
  bodyScrollLock = true,
  visible,
}) => {
  const backdropRef = useRef(null);
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (visible) setContainerHeight(containerRef.current?.offsetHeight);
  }, [visible, setContainerHeight]);

  useEffect(() => {
    const handleKeydown = ({ code }) =>
      code === 'Escape' && onClose && onClose();

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onClose]);

  const handleBackdropClick = ({ currentTarget, target }) =>
    currentTarget === target && onClose && onClose();

  return createPortal(
    <Transition
      mountOnEnter
      unmountOnExit
      timeout={0}
      nodeRef={backdropRef}
      in={visible}
    >
      {state => (
        <Backdrop
          ref={backdropRef}
          onClick={handleBackdropClick}
          bgColor={bgColor}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {bodyScrollLock && <BodyScrollLock />}
          <Container ref={containerRef} offsetHeight={containerHeight}>
            {children}
          </Container>
        </Backdrop>
      )}
    </Transition>,
    rootModal
  );
};

Modal.propTypes = {
  bgColor: string,
  onClose: func,
  bodyScrollLock: bool,
  visible: bool,
};
