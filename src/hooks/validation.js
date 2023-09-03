import { useState } from "react";
const useValidation = () =>{
    const [isValid , setIsValid] = useState({
        image : true,
        email : true,
        name : true ,
        englishLevel : true,
        contact : true,
    })

    const inputIsValid = (type , value) => {
       
        if(type === 'email'){
            if(!value.includes('@') || value.length ===0 ) 
            {
                setIsValid(prev=>{return {...prev,email : false}})
            }
            else{
                setIsValid(prev=>{return {...prev,email : true}})
            }
        }
        if(type === 'image')  
        {
            if(value.length===0)
            setIsValid(prev=>{return {...prev,image : false}})
            else
            setIsValid(prev=>{return {...prev,image : true}})
        }
        if(type === 'englishLevel')  
        {
            if(value.length===0)
            setIsValid(prev=>{return {...prev,englishLevel : false}})
            else
            setIsValid(prev=>{return {...prev,englishLevel : true}})
        }
        if(type === 'name')  
        {
            if(value.length < 5)
            setIsValid(prev=>{return {...prev,name : false}})
            else
            setIsValid(prev=>{return {...prev,name : true}})
        }
        if(type === 'contact')  
        {
            if(value > 1000000000 && value < 9999999999)
            setIsValid(prev=>{return {...prev,contact : true}})
            else
            setIsValid(prev=>{return {...prev,contact : false}})
        }
    }
    return {isValid , inputIsValid}
}
export default useValidation;