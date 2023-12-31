import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const sponsorList = [
  {
    imgUrl: "assets/images/sponsor/01.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/sponsor/02.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/sponsor/03.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/sponsor/04.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/sponsor/05.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/sponsor/06.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/sponsor/07.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/sponsor/08.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/sponsor/09.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/sponsor/10.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/sponsor/11.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/sponsor/12.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/sponsor/13.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "assets/images/sponsor/14.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
];

const Sponsor = () => {
  return (
    <div className="sponsor-section section-bg">
      <div className="container">
        <div className="section-wrapper">
          <div className="sponsor-slider">
            <style>
              {`
              .swiper-wrapper {
                transition-timing-function: linear;
              }
        `}
            </style>
            <Swiper
              loop={"true"}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              speed={2000}
              breakpoints={{
                0: {
                  width: 100,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 5,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 8,
                },
              }}
            >
              {sponsorList.map((val, i) => (
                <SwiperSlide key={i}>
                  <div className="sponsor-iten">
                    <div className="sponsor-thumb">
                      <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
