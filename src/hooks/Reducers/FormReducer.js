import { act } from "react-dom/test-utils";

export const initialState={
email:'',
username:'',
password:'',
userType:'',
experties:[],
name:'',
};
export default function formReducer(state,action){
switch(action.type){
    case 'CHANGE_EMAIL':return {...state,email:action.payload};
    case 'CHANGE_PASSWORD':return {...state,password:action.payload};
    case 'CHANGE_USERTYPE':return {...state,userType:action.payload};
    case 'CHANGE_USERNAME':return {...state,username:action.payload};
    case 'CHANGE_EXPERTIES':return {...state,experties:action.payload};
    case 'CHANGE_NAME':return {...state,name:action.payload};
    default: return state;
}
}