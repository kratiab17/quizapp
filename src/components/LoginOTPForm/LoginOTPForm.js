import { Modal ,Button ,Form } from "react-bootstrap";
import arrow from '../../assets/arrow_back.png';
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modalSlice";
import { registerActions } from "../../store/registerSlice";

const LoginOTPForm = () =>{
    const dispatch = useDispatch()
    const hide = () =>{
        dispatch(modalActions.decreaseCount());
        dispatch(modalActions.handleClose())
    }
    const otp = useSelector(state=>state.register.otp)
    const changeHandler = (index , value) =>{
        dispatch(registerActions.handleOTP({index : index, value : value }))
    }
    return(
        <>
       <Modal.Header  className="border-0 ">
            <Button className="bg-white border-0 my-1 p-0" onClick={hide} ><img src={arrow} height={'30px'} alt="backward"/></Button>
        </Modal.Header>
    <Modal.Body >
    <Form>
        <div className="col-lg-8 col-12 mx-auto">
        <input type='number' max={0} min={0} onChange={(e)=>changeHandler(0,e.target.value)} className='custom-modal col-2 mx-lg-1  mx-1 py-2 otp' />
        <input type='number' max={9} onChange={(e)=>changeHandler(1,e.target.value)} className='custom-modal col-2 mx-lg-1 mx-1 py-2 otp'/>
        <input type='number' max={9} onChange={(e)=>changeHandler(2,e.target.value)} className='custom-modal col-2 mx-lg-1 mx-1 py-2 otp'/>
        <input type='number' max={9} onChange={(e)=>changeHandler(3,e.target.value)}  className='custom-modal col-2 mx-lg-1 mx-1 py-2 otp'/>
        <input type='number' max={9} onChange={(e)=>changeHandler(4,e.target.value)} className='custom-modal col-2 mx-lg-1  mx-1 py-2 otp'/>
        </div>
        {otp.length < 5 && otp.length !==0 && <div className="text-danger col-8 mx-auto">value can't be empty</div>}
       <Button disabled ={otp.length!==5} onClick={()=>{dispatch(modalActions.increaseCount())}} className="custom-btn col-12 mx-0 my-4 p-2 border-0">Continue</Button>
        
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
export default LoginOTPForm;