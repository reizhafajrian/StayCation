import React from "react";
import IMGBackgroundTesti from "assets/image/img_testi_bg.png";
import IMGFrameTesti from "assets/image/img_testi_frame.png";
import Star from "elements/Star";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";
export default function Testimoni({ data }) {
  return (
      <Fade bottom delay={100}> 


      <section className='container'>
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 70 }}>
            <div
              className="testimonial-hero position-relative"
              style={{ margin: "30px 0 0 30px" 
        
            }}
            >
            <img
              src={IMGBackgroundTesti}
              alt="Testimonial"
              className="position-absolute"
              style={{ zIndex: 2 }}
            />
            <img
              src={IMGFrameTesti}
              alt="Testimonial Frame"
              className="position-absolute"
              style={{ zIndex: 1, margin: "-30px 0 0 -30px" }}
            />
            </div>
          </div>
          <div className="col">
            <h4 className="text-secondary" style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4} />
            <h5 className="h2 font-weight-light line-height-2 my-3 text-secondary">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName},{data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read their story
              </Button>
            </div>
          </div>
        </div>
      </section>
      </Fade>
  );
}
