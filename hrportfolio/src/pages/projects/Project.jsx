import React from "react";
import "./project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Project = () => {
  const lithoUrl = "https://playful-muffin-b652cb.netlify.app/";
  const handleLitho = () => {
    window.open(lithoUrl, "_blank");
  };
  // outlander site
  const outlanderUrl = "https://fantastic-cajeta-e9b7b8.netlify.app";
  const handleOutlander = () => {
    window.open(outlanderUrl, "_blank");
  };
  // twowheleres
  const twoWhelerUrl = "https://eloquent-cuchufli-5ab3ef.netlify.app";
  const handleTwowhelers = () => {
    window.open(twoWhelerUrl, "_blank");
  };
  // student database

  const studentUrl = "https://github.com/Hritesh-panda/newStudent";
  const handlestudnt = () => {
    window.open(studentUrl, "_blank");
  };
  return (
    <div>
      <section className="r-wrapper container">
        <div className="r-container" id="projectpage">
          <div className="r-head">
            <h1>Projects</h1>
            <h2>WHAT I'VE WORKED</h2>

            <Swiper
              // slidesPerView={1}
              // spaceBetween={50}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                // type: "progressbar",
              }}
              // break point
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="p-card">
                  <div className="pcard-img">
                    <img src="lithoimg.png" alt="" />
                    <div className="p-card-overlay">
                      <button onClick={handleLitho}>
                        View site <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <h4 className="text-start">Title</h4>
                  <p className="text-start">
                    Lorem ipsum dolor sit. <br />
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-card">
                  <div className="pcard-img">
                    <img src="outlanderimg.png" alt="" />
                    <div className="p-card-overlay">
                      <button onClick={handleOutlander}>
                        View site <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <h4 className="text-start">Title</h4>
                  <p className="text-start">
                    Lorem ipsum dolor sit. <br />
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="p-card">
                  <div className="pcard-img">
                    <img src="twowhlrs.png" alt="" />
                    <div className="p-card-overlay">
                      <button onClick={handleTwowhelers}>
                        View site <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <h4 className="text-start">Title</h4>
                  <p className="text-start">
                    Lorem ipsum dolor sit. <br />
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-card">
                  <div className="pcard-img">
                    <img src="studentbase.png" alt="" />
                    <div className="p-card-overlay">
                      <button onClick={handlestudnt}>
                        View site <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <h4 className="text-start">Title</h4>
                  <p className="text-start">
                    Lorem ipsum dolor sit. <br />
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-card">
                  <div className="pcard-img">
                    <img src="outlanderimg.png" alt="" />
                    <div className="p-card-overlay">
                      <button>
                        View site <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <h4 className="text-start">Title</h4>
                  <p className="text-start">
                    Lorem ipsum dolor sit. <br />
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-card">
                  <div className="pcard-img">
                    <img src="twowhlrs.png" alt="" />
                    <div className="p-card-overlay">
                      <button>
                        View site <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <h4 className="text-start">Title</h4>
                  <p className="text-start">
                    Lorem ipsum dolor sit. <br />
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
