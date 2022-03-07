import React from 'react';
import Lottie from 'react-lottie';
import { NavHashLink } from 'react-router-hash-link';
import homeBg from '../../../../assets/home_bg.png';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import animationData from '../../../../lotties/village.json';
import Features from '../Features/Features';

const Banner = () => {
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div
      className="mt-[80px] mb-36 md:mb-24"
      style={{
        minHeight: isDesktop ? 'calc(100vh - 88px)' : 'fit-content',
      }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2 items-center lg:space-y-0 bg-no-repeat bg-left-top"
        style={{ backgroundImage: isDesktop ? `url(${homeBg})` : 'none' }}
      >
        {/* banner description */}
        <div className="w-full place-self-center lg:mt-24 order-1 text-center lg:text-left lg:ml-80">
          <h1>Digital Village</h1>
          <p className="pb-3 w-4/6 text-sm font-extralight mt-3 text-gray-600">
            We the village administration provide quality services through this
            platform. Every villagers can fit their needs by utilizing the
            facilities we provide.
          </p>
          <div className="flex items-start">
            <NavHashLink smooth to="/#service">
              <button className="btn rounded-lg bg-primary">Services</button>
            </NavHashLink>
          </div>
        </div>
        <div className="lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 order-3 lg:order-2">
          <Features />
        </div>
        {/* banner svg */}
        <div className="w-full pointer-events-none  lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 order-2 lg:order-3">
          <div className="w-fit mx-auto">
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              width={isDesktop ? 600 : isTablet ? 400 : 250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;