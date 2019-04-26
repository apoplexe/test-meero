import App from "../../app";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    cardsList: state
  };
};

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
