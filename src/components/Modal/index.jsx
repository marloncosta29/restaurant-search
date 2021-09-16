import React, { useEffect } from 'react';
import { PortalModal } from './Portal';
import { Overlay, Dialog } from './styles';

export const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27) {
        onClose();
      }
    }
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  if (!open) {
    return null;
  }

  function handleOnOverlayClick() {
    onClose();
  }
  function onDialogClick(e) {
    e.stopPropagation();
  }

  return (
    <PortalModal>
      <Overlay onClick={handleOnOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
    </PortalModal>
  );
};
