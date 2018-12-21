import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_FAILURE,
  ADOPT_DOG_REQUEST,
  ADOPT_DOG_SUCCESS,
  ADOPT_DOG_FAILURE,
} from '../actions';

const defaultState = {
  dog: null,
  error: null,
  loading: false
};

export default function dogReducer(state = defaultState, action){
  if(action.type === FETCH_DOG_REQUEST){
    return {
      ...state,
      loading: true,
      error: null
    }
  }
  if(action.type === FETCH_DOG_SUCCESS){
    return {
      ...state,
      loading: false,
      error: null,
      dog: action.dog
    }
  }
  if(action.type === FETCH_DOG_FAILURE){
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }
  if(action.type === ADOPT_DOG_REQUEST){
    return {
      ...state,
      loading: true,
      error: null
    }
  }
  if(action.type === ADOPT_DOG_SUCCESS){
    return{
      ...state,
      loading: false,
      error: null,
      dog: null
    }
  }
  return state;
}