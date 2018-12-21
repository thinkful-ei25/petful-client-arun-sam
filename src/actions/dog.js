import { API_BASE_URL } from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST,
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
const fetchDogSuccess = (dog) => ({
  type: FETCH_DOG_SUCCESS,
  dog,
});

export const FETCH_DOG_FAILURE = 'FETCH_DOG_FAILURE';
const fetchDogFailure = (error) => ({
  type: FETCH_DOG_FAILURE,
  error,
});

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
const adoptDogRequest = () => ({
  type: ADOPT_DOG_REQUEST,
});

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
const adoptDogSuccess = () => ({
  type: ADOPT_DOG_SUCCESS,
});

export const ADOPT_DOG_FAILURE = 'ADOPT_DOG_SUCCESS';
const adoptDogFailure = (error) => ({
  type: ADOPT_DOG_FAILURE,
  error,
});

export const fetchDog = () => (dispatch) => {
  dispatch(fetchDogRequest());
  return fetch(`${API_BASE_URL}/api/dog`)
    .then((res) => res.json())
    .then((dog) => dispatch(fetchDogSuccess(dog)));
};

export const adoptDog = () => (dispatch) => {
  dispatch(adoptDogRequest());
  return fetch(`${API_BASE_URL}/api/dog`, { METHOD: 'DELETE' }).then(() =>
    dispatch(adoptDogSuccess())
  )
  .then(() => fetchDog());
};
