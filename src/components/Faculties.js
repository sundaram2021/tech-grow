import React, { Component } from "react";
// import "../CSS/faculties.css";
import { data } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

// let data = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];


export default class App extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 414,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      // appendDots: (dots) => (
      //   <div className="dots-div"
      //     style={{
      //       backgroundColor: "#191919",
      //       borderRadius: "10px",
      //       padding: "2px",
      //     }}
      //   >
      //     <ul style={{ margin: "0px" }}> {dots} </ul>
      //   </div>
      // ),
      customPaging: () => (
        <div
          className="dots"
          style={{
            width: "10px",
            color: "#666",
            fontSize: "27px",
          }}
        >
          .
        </div>
      ),
    };
    return (
      <motion.div
       initial = {{opacity: 0, scale: 0.4}}
       animate = {{opacity: 1, scale: 1}}
       transition = {{
        duration : 2.8
       }}
       id="carousel" 
       style={{ backgroundColor: "#191919" }} 
      >
        <h2>List of Experts</h2>
        <i className="fa-sharp fa-solid fa-angle-left" onClick={() => this.slider.slickPrev()}></i>
        <i className="fa-solid fa-angle-right" onClick={() => this.slider.slickNext()}></i>
        <div>
          <Slider
            className="carousel-grid"
            ref={(slider) => (this.slider = slider)}
            {...settings}
            style={{
              height: "300px",
              display: "flex",
              gap: "10px",
              // flexDirection: "column"
              margin: "20px",
              borderRadius: "20px",
              backgroundColor: "#191919",
            }}
          >
            {data.map((item, index) => {
              // console.log(item.name);
              return (
                <div
                  key={index}
                  style={{
                    boxShadow: "10px 10px 10px #000",
                    // margin: "1.4rem",
                    display: "grid !important",
                    placeItems: "center !important",
                    width: "210px"
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#372948",
                      width: "190px",
                      height: "130px",
                      borderBottomRightRadius: "50px",
                      borderBottomLeftRadius: "50px",
                      position: "absolute",
                      display: 'grid',
                      placeItems: "center",
                      zIndex: "99999"
                      // alignItems: 'center'
                      // justifyContent: "space-around"
                      // marginBottom: "-18px"
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      style={{
                        position: "absolute",
                        width: "110px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        backgroundPosition: "center",
                        border: "3px solid #372948",
                        top: "30px",
                        
                        // marginLeft: "94px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      backgroundColor: "#ffcaca",
                      width: "100%",
                      height: "240px",
                      display: "flex",
                      flexDirection: "column",
                      // textAlign: "center",
                      justifyContent: "space-evenly",
                      // alignItems: 'center',
                      paddingTop: "58%",
                      boxSizing: "border-box",
                      paddingLeft: "1.2rem"
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: "900",
                        color: "#191919",
                        zIndex: "9999",
                      }}
                    >
                      <strong>{item.name}</strong>
                    </h3>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        opacity: "0.8",
                        color: "#191919",
                      }}
                    >
                      {item.description}({item.role})
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    );
  }
}
