import React, { Component } from "react";
// redux
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions";
// route
import { Route } from "react-router-dom";
// components
import OverviewContainer from "../../components/collections-overview/OverviewContainer";
import CollectionPageContainer from "../../pages/collection-page/CollectionPageContainer";

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={OverviewContainer} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
