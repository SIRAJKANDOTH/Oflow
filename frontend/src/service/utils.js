import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function trigger() {
    console.log("nice")
    toast.success('Success message');
  }