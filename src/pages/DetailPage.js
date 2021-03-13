import Header from "parts/Header";
import PagetDetailTitle from "parts/PageDetailTitle";
import React, { Component } from "react";
import itemDetail from 'assets/json/itemDetails.json'
import FeatureImage from "parts/FeatureImage";
import Describe from "parts/Describe";
import BookingForms from "parts/BookingForms";
import Categories from "parts/Categories";
import Testimoni from "parts/Testimoni";
import Footer from "parts/Footer";
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
        <Header {...this.props} />
        <PagetDetailTitle
          breadcrumb={breadcrumb}
          data={itemDetail}
        ></PagetDetailTitle>
         <FeatureImage data={itemDetail.imageUrls} />
         <section className="container">
           <div className="row">
             <div className="col-7 pr-5">
             <Describe data={itemDetail} />
             </div>
             <div className="col-5">
              <BookingForms
              itemDetails={itemDetail}
              />
             </div>
           </div>
         </section>
         <Categories data={itemDetail.categories}/>
         <Testimoni data={itemDetail.testimonial} />
         <Footer/>

      </>
    );
  }
}
