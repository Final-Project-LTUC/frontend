export let initialState = {
    loggedIn: false,
    user: { capabilities: [] },
    token:'',
    error: null,
  }

  export function loginReducer(state,action){
    switch(action.type){
        case 'CHANGE_LOGIN_STATUS':return {...state,loggedIn:action.payload};
        case 'CHANGE_LOGOUT_STATUS':return{...state,loggedIn:false};
        case 'CHANGE_USER':return {...state,user:action.payload};
        case 'CHANGE_TOKEN':return {...state,token:action.payload};
        // case 'CHANGE_ERROR':return {...state,token:action.payload};
        default : return state;
    }
  }