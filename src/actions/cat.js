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

export const fetchCat = (dispatch) => ({
  
  fetch(`${API_BASE_URL}/api/cat`);
});


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

});

export const adoptCat = () =>({
  
});