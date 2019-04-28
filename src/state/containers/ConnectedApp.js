import {
  fetchCatsError,
  fetchCatsRequest,
  fetchCatsSuccess
} from "../actions/index";

import App from "../../app";
import { connect } from "react-redux";
import fetchCats from "../../utils/request";

const fetchCatsWithRedux = url => {
  return dispatch => {
    dispatch(fetchCatsRequest());
    return fetchCats(url)
      .then(response => dispatch(fetchCatsSuccess(response)))
      .catch(error => dispatch(fetchCatsError()));
  };
};

const mapStateToProps = state => {
  return {
    cats: state
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  {
    fetchCatsWithRedux
  }
)(App);

export default ConnectedApp;
