export const initialState = {
  email: "",
  username: "",
  password: "",
  userType: "",
  experties: [],
  firstName: "",
  lastName:'',
  age:0,
  hourlyRate:0,
  inquiryPrice:0,
  image: null,
  lat: 0,
  long: 0,
  phoneNumber: 0,
  yearsOfExperience: 0,
  description: "",
  isValidEmail: true,
  isValidPassword: true,
  isValidUsername: true,
  isValidPhoneNum: true,
};
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
const usernamePattern = /^[a-zA-Z0-9_-]{3,16}$/;
const mobileNumberPattern = /^[0-9]{10}$/;
export const checkAllValidation = (formData) => {
  return (
    formData.isValidEmail &&
    formData.isValidPassword &&
    formData.isValidUsername
  );
};
export default function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return {
        ...state,
        email: action.payload,
        isValidEmail: emailPattern.test(action.payload),
      };
    case "CHANGE_PASSWORD":
      return {
        ...state,
        password: action.payload,
        isValidPassword: passwordPattern.test(action.payload),
      };
    case "CHANGE_USERTYPE":
      return { ...state, userType: action.payload };
    case "CHANGE_USERNAME":
      return {
        ...state,
        username: action.payload,
        isValidUsername: usernamePattern.test(action.payload),
      };
    case "CHANGE_NUMBER":
      return {
        ...state,
        phoneNumber: action.payload,
        isValidPhoneNum: mobileNumberPattern.test(action.payload),
      };
    case "CHANGE_NAME":{
      const [firstName,lastName]=action.payload.split(' ');
      return { ...state, firstName:firstName,lastName:lastName};
    }
    case "CHANGE_DESCRIPTION":
      return { ...state, description: action.payload };
    case "CHANGE_IMAGE":
      return {...state,image:action.payload};
    case "CHANGE_YearsOfExperience":
      return { ...state, yearsOfExperience: action.payload };
    case "CHANGE_LOCATION":
      return { ...state, lat: action.payload.lat, long: action.payload.long };
      case 'DECLARE_LANGUAGES':{
        const newState={...state,languages:[]};
        return newState;
      }
      case "CHANGE_HOURLYRATE":return {...state,hourlyRate:action.payload};
      case 'CHANGE_INQUIRY':return {...state,inquiryPrice:action.payload};
      case 'CHANGE_AGE':return {...state,age:action.payload};
      case 'CHANGE_FIRSTNAME':return {...state,firstName:action.payload};
      case 'CHANGE_LASTNAME':return {...state,lastName:action.payload};
    case "CHANGE_LANGUAGES": {
        let newLanguages=state.languages;
        if(newLanguages?.includes(action.payload)){
          newLanguages=newLanguages.filter(e=>e!==action.payload);
          return {...state,languages:newLanguages}
        }else {
          newLanguages.push(action.payload);
          return{...state,languages:newLanguages};
        }
      }
      case 'ADD_LANGUAGES':return {...state,languages:[]};
    case "CHANGE_EXPERTIES": {
      let newArray = state.experties;
      if (newArray.includes(action.payload)) {
        newArray = newArray.filter((e) => e !== action.payload);
        return { ...state, experties: newArray };
      } else {
        newArray.push(action.payload);
        return { ...state, experties: newArray };
      }
    }
    case 'CHANGE_ALL':return{...action.payload}
    default:
      return state;
  }
}
