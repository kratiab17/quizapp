import { Modal } from "react-bootstrap"
import arrow from '../../assets/arrow_back.png';
import {Button , Form} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modalSlice";
import { registerActions } from "../../store/registerSlice";
import useValidation from "../../hooks/validation";
const LoginEmailForm = () => {
    const {isValid , inputIsValid} = useValidation()
    const dispatch = useDispatch();
    const email = useSelector(state=>state.register.email)
    const changeHandler =(e) =>{
        dispatch(registerActions.handleEmail({value : e.target.value}))
        inputIsValid('email',e.target.value)
    }
    return (
        <>
        <Modal.Header>
        <Button className="bg-white border-0 my-1 p-0" onClick={()=>dispatch(modalActions.handleClose())} ><img src={arrow} height={'30px'} alt="backward"/></Button>
    </Modal.Header>
<Modal.Body >
<Form >
   <input name='email'  onChange={changeHandler} type='email'  placeholder="Enter your Email Address" className= 'col-12  p-2 border-0  custom-input' />

   {!isValid.email && <div className="text-danger mx-3">enter valid email</div>}
   <Button  disabled={!email.includes('@')}  onClick={()=>dispatch(modalActions.increaseCount())} className="custom-btn col-12 mx-0 my-4 p-2 border-0"> Get OTP</Button>
</Form>
</Modal.Body>
<Modal.Footer className="border-0">
<p className="mx-auto pb-5 fw-bolder text-center"> 
No more tension to remember or save password.
<br/>Login with OTP every time 
</p>
</Modal.Footer>
</>
    )
}
export default LoginEmailForm