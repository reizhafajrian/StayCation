import React, { Component,useEffect } from "react";
import Header from "parts/Header";
import data from "assets/json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimoni from "parts/Testimoni";
import Footer from "parts/Footer";
// export default class LandingPage extends Component{
//     componentDidMount(){
//         document.title="Staycation | Home"
//         window.scrollTo(0,0)
//     }
  
//     render(){
//         return (
//             <>
//             <Header {...this.props}></Header>
//             <Hero data={data.hero}/>
//             <MostPicked data={data.mostPicked} />
//             <Categories data={data.categories} />
//             <Testimoni data={data.testimonial} />
//             <Footer/>
//             </>
//         )
//     }

// }


export default function LandingPage(props) {
    useEffect(() => {
        document.title="Staycation | Home"
        window.scrollTo(0,0)
        return () => {
            window.title=""
        }
    })

  return (
    <>
      <Header {...props}></Header>
      <Hero data={data.hero} />
      <MostPicked data={data.mostPicked} />
      <Categories data={data.categories} />
      <Testimoni data={data.testimonial} />
      <Footer />
    </>
  );
}
