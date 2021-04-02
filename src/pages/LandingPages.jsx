import React, { Component } from "react";
import landingPage from "json/landingPage";
import Header from "components/Header";
import Hero from "components/Hero";
import MostPicked from "components/MostPicked";
import Categories from "components/Categories";
import Testimonial from "components/Testimonial";
import Footer from "components/Footer";
export default class LandingPages extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimonial data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
