import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_FAILURE,
  ADOPT_CAT_REQUEST,
  ADOPT_CAT_SUCCESS,
  ADOPT_CAT_FAILURE,
} from '../actions';

const defaultState = {
  cat: {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
  },
  error: null,
  loading: false
};

export default function catReducer(state = defaultState, action){
  if(action.type === FETCH_CAT_REQUEST){
    return {
      ...state,
      loading: true,
      error: null
    }
  }
  if(action.type === FETCH_CAT_SUCCESS){
    return {
      ...state,
      loading: false,
      error: null,
      cat: action.cat
    }
  }
  if(action.type === FETCH_CAT_FAILURE){
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }
  if(action.type === ADOPT_CAT_REQUEST){
    return {
      ...state,
      loading: true,
      error: null
    }
  }
  if(action.type === ADOPT_CAT_SUCCESS){
    return{
      ...state,
      loading: false,
      error: null,
      cat: null
    }
  }
  return state;
}