import { Form , Button} from "react-bootstrap";
import classes from './Profile.module.css';
import { useDispatch, useSelector } from "react-redux";
import {registerActions} from "../../store/registerSlice";
import { modalActions } from "../../store/modalSlice";
import useValidation from "../../hooks/validation";
const Profile = () =>{
    const formData = useSelector(state=>state.register.formData)
    const email = useSelector(state=>state.register.email);
    const otp = useSelector(state=>state.register.otp)
    const { isValid , inputIsValid } = useValidation()
    const dispatch = useDispatch()
    const hide = () =>{
        console.log({email,formData,otp});
        dispatch(modalActions.increaseCount());
        dispatch(modalActions.handleClose())
        dispatch(registerActions.handleLogin())
    }
    const changeHandler = (type , value) =>{
        dispatch(registerActions.handleFormData({type : type ,value : value }))
        inputIsValid(type,value)
    }
    return( 
    <Form >
         <input type="file" onBlur={(e)=>changeHandler('image' , e.target.value)} className={`col-6 d-block  p-1 border-0 custom-image` } />
         {!isValid.image && <div className="mx-auto col-3 text-danger">select image</div>}
        
        <label htmlFor='name' className="mx-5 fw-bolder  mt-5" >Name</label>
        <input name='name' type='text' onChange={(e)=>changeHandler('name' , e.target.value)}  className={`col-10 mx-auto d-block px-3   ${classes['custom']} `} />
        {!isValid.name && <div className="mx-5 text-danger">Name must be greater than 5</div>}
        
        <label htmlFor='contact' className="fw-bolder mx-5 mt-3">Phone Number</label>
        <input name='name' onChange={(e)=>changeHandler('contact' , e.target.value)} type='contact'className={`col-10 mx-auto d-block px-3  ${classes['custom']} `} />
        {!isValid.contact && <div className='text-danger mx-5'>enter valid phone number</div>}
        
        <label htmlFor='email' className="fw-bolder mx-5 mt-3">Email Address</label>
        <input type='email' onChange={(e)=>changeHandler('email' , e.target.value)} className={`col-10 mx-auto d-block px-3  ${classes['custom']} `} />
        {!isValid.email && <div className="text-danger mx-5">enter valid email</div>}
        
        <label htmlFor='englishLevel' className="fw-bolder mx-5 mt-3">English Level</label>
        <input type='text' onChange={(e)=>changeHandler('englishLevel' , e.target.value)}  className={`${classes['custom']} col-10 mx-auto d-block px-3`} />
        {!isValid.englishLevel && <div className="text-danger mx-5">please enter english level</div>}
        
        <Button  onClick={hide} className={` col-lg-4 col-12   my-5 border-0 ${classes['custombtn']} `}>Get Started</Button>
    </Form>
    
    )
}
export default Profile;