import {API_BASE_URL} from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const FETCH_CAT_FAILURE = 'FETCH_CAT_FAILURE';
const fetchCatFailure = (error) => ({
  type: FETCH_CAT_FAILURE,
  error
});

export const fetchCat = () => (dispatch) => {
  dispatch(fetchCatRequest());
  return fetch(`${API_BASE_URL}/api/cat`)
    .then(res => res.json())
    .then(cat => dispatch(fetchCatSuccess(cat)))
    .catch(error => dispatch(fetchCatFailure(error)));
};


export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
});

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
const adoptCatSuccess = () => ({
  type: ADOPT_CAT_SUCCESS
})

export const ADOPT_CAT_FAILURE = 'ADOPT_CAT_FAILURE';
const adoptCatFailure = (error) => ({
  type: ADOPT_CAT_FAILURE,
  error
});

export const adoptCat = () => (dispatch) => {
  dispatch(adoptCatRequest());
  return fetch(`${API_BASE_URL}/api/dog`, {
    method: 'DELETE'
  })
    .then(()=>dispatch(adoptCatSuccess()))
    .then(()=>dispatch(fetchCat()));
};
