
export const initialState={
    experties:[],
    name:'',
    image:null,
    lat:0,
    long:0,
    phoneNum:0,
    yearsOfExperience:0,
    description:'',
    languages:'',
    isValidPhoneNum:true,
    };
    const mobileNumberPattern = /^[0-9]{10}$/;
    // export const checkAllValidation=(formData)=>{
    //     return formData.isValidEmail&&formData.isValidPassword&&formData.isValidUsername;
    // }
    export default function MoreInfoReducer(state,action){
        console.log(state)
    switch(action.type){
        case 'CHANGE_NUMBER':return {...state,phoneNum:action.payload};
        case 'CHANGE_DESCRIPTION':return {...state,description:action.payload};
        case 'CHANGE_IMAGE':return {...state,image:action.payload};
        case 'CHANGE_YearsOfExperience':return {...state,yearsOfExperience:action.payload};
        case 'CHANGE_LOCATION':return {...state,lat:action.payload.lat,long:action.payload.long};
        case 'CHANGE_EXPERTIES':{
           let newArray=state.experties;
           if(newArray.includes(action.payload)){
           newArray=newArray.filter(e=>e!==action.payload);
            return {...state,experties:newArray};
            }else {
                newArray.push(action.payload);
                return {...state,experties:newArray};
           }
           
            };
    
        default: return state;
    }
    }