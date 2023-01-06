import ReactDOM from 'react-dom';
import './index.scss';

const modalRootEl = document.getElementById('modal-root');

const Modal = ({ children, open = false }) => {
  if (!open) return null;

  return ReactDOM.createPortal(children, modalRootEl);
};

export default Modal;
