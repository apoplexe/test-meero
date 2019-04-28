export const ADD_MOVIE = "ADD_MOVIE";
export const FILTER_CARD = "FILTER_CARD";
export const filterCard = location => ({ type: FILTER_CARD, location });

export const FETCH_CATS_REQUEST = "FETCH_CATS_REQUEST";
export const FETCH_CATS_SUCCESS = "FETCH_CATS_SUCCESS";
export const FETCH_CATS_ERROR = "FETCH_CATS_ERROR";
export const fetchCatsRequest = () => ({ type: FETCH_CATS_REQUEST });
export const fetchCatsSuccess = cats => ({ type: FETCH_CATS_SUCCESS, cats });
export const fetchCatsError = e => ({ type: FETCH_CATS_ERROR, e });
