import React from "react";

import { HomePageConainer } from "./HomePageStyle";
import Directory from "../../components/directory/Directory";
// redux
import { connect } from "react-redux";
// reselect
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { createStructuredSelector } from "reselect";

const HomePage = ({ currentUser }) => (
  <HomePageConainer>
    <h1>Welcome To Crown Fashion, {currentUser.displayName}</h1>
    <Directory />
  </HomePageConainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(HomePage);
