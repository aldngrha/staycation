import React, { Component } from "react";
import Header from "components/Header";
import PagetDetailTitle from "components/PageDetailTitle";
import ItemDetails from "json/itemDetails.json";
import FeaturedImage from "components/FeaturedImage";

export default class DetailPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PagetDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PagetDetailTitle>
        <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
      </>
    );
  }
}
