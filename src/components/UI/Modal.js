import { useSelector , useDispatch } from "react-redux";
import { Modal , Container} from "react-bootstrap";
import Profile from '../Profile/Profile';
import LoginEmailForm from "../LoginEmailForm/LoginEmailForm";
import LoginOTPForm from "../LoginOTPForm/LoginOTPForm";
import { modalActions } from "../../store/modalSlice";
const ModalComponent = () =>{
  const show = useSelector(state=>state.modal.show);
  const count = useSelector(state=>state.modal.count);
  const dispatch = useDispatch();
    return(
        <Modal  show={show} onHide={()=>dispatch(modalActions.handleClose())} backdrop='static' className="modal">
            <Container className="custom-modal">
            {count === 1 && <LoginEmailForm />}
            {count === 2 && <LoginOTPForm  />}
            {count === 3 && <Profile  />}
    </Container>
  </Modal>
    )
}
export default ModalComponent;

