import ReactDom from 'react-dom';

export const PortalModal = ({ children }) => {
  const portal = document.getElementById('modal-root');
  return ReactDom.createPortal(children, portal);
};
