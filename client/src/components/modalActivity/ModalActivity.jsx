import style from './ModalActivity.module.css'
import { useDispatch } from "react-redux";
import {setModal} from '../../redux/actions/actions';

const ModalActivity = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModal(false));
    document.body.style.overflow = "scroll";
  }

  return (
    <div className={style.modalBG}>
      <div className={style.modalContainer}>
        <div className={style.topBtn}>
          <button onClick={handleClose}>Close</button>
        </div>
        
      </div>
    </div>

  )
}

export default ModalActivity;