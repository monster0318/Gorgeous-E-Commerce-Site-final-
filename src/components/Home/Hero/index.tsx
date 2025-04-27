import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#E5EAF4]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              <div className="w-full relative rounded-[10px] bg-white bg-review-hero bg-cover hover:-translate-y-3 ease-out duration-300 hover:shadow-card">
                <div className="flex items-center  rounded-[10px] gap-14 bg-opacity-60 p-2 sm:p-7.5 bg-body">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-20">
                      <a href="#"> Social Media Reviews </a>
                    </h2>

                    <div>
                      <p className="font-medium text-white text-custom-sm mb-1.5">
                        Get high rate reviews for free!
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-red">
                          Buy now!
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full relative rounded-[10px] bg-white  bg-social-reaction-hero bg-cover hover:-translate-y-3 ease-out duration-300 hover:shadow-card">
                <div className="flex items-center  rounded-[10px] gap-14 bg-opacity-60 p-2 sm:p-7.5 bg-body">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-20">
                      <a href="#"> Social Reactions </a>
                    </h2>

                    <div>
                      <p className="font-medium text-white text-custom-sm mb-1.5">
                        Your secret weapon for social selling!
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-red">
                          Buy now!
                        </span>
                      </span>
                    </div>
                  </div>

                  
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
