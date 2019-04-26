import AppBar from "../../components/AppBar";
import { connect } from "react-redux";
import { filterCard } from "../actions";

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleLocationChange: location => {
      dispatch(filterCard(location));
    }
  };
};

const ConnectedAppBar = connect(
  null,
  mapDispatchToProps
)(AppBar);

export default ConnectedAppBar;
