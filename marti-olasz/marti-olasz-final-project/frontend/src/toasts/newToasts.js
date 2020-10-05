import { toast } from 'react-toastify';

const config = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
};

const newToast = (text) => toast.error(text, config);
export default newToast;
