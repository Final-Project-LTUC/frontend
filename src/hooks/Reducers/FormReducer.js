
export const initialState={
email:'',
username:'',
password:'',
userType:'',
experties:[],
name:'',
isValidEmail:true,
isValidPassword:true,
 isValidUsername:true,
isValidPhoneNum:true,

};
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
const usernamePattern = /^[a-zA-Z0-9_-]{3,16}$/; 
const mobileNumberPattern = /^[0-9]{10}$/;
export const checkAllValidation=(formData)=>{
    return formData.isValidEmail&&formData.isValidPassword&&formData.isValidUsername;
}
export default function formReducer(state,action){
switch(action.type){
    case 'CHANGE_EMAIL':return {...state,email:action.payload,isValidEmail:emailPattern.test(action.payload)}
    case 'CHANGE_PASSWORD':return {...state,password:action.payload,isValidPassword:passwordPattern.test(action.payload)};
    case 'CHANGE_USERTYPE':return {...state,userType:action.payload};
    case 'CHANGE_USERNAME':return {...state,username:action.payload,isValidUsername:usernamePattern.test(action.payload)};
    case 'CHANGE_EXPERTIES':{
       let newArray=state.experties;
       if(newArray.includes(action.payload)){
       newArray=newArray.filter(e=>e!==action.payload);
        return {...state,experties:newArray};
        }else {
            newArray.push(action.payload);
            return {...state,experties:newArray};
       }
       
        }
    case 'CHANGE_NAME':return {...state,name:action.payload};
    case 'CHANGE_PHONENUM':return {...state,phoneNum:action.payload,isValidPhoneNum:mobileNumberPattern.test(action.payload)};
    default: return state;
}
}