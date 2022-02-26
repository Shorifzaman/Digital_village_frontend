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
      className="mt-[88px] mb-36 md:mb-24 bg-no-repeat bg-left-top"
      style={{
        height: 'calc(100vh - 88px)',
        backgroundImage: isDesktop ? `url(${homeBg})` : 'none',
      }}
    >
      <div className="flex flex-wrap items-center md:space-y-0">
        {/* banner description */}
        <div className="w-full md:w-1/2 place-self-center md:space-y-6 text-center ">
          <h1 className="">Digital Village</h1>
          <p className="pb-3 w-5/6 mx-auto">
            Transforming an analog village into a digital one
          </p>
          <NavHashLink smooth to="/#service">
            <button className="btn bg-gradient-to-r from-primary via-secondary to-secondary hover:from-primary hover:via-secondary hover:to-primary shadow-xl">
              Services
            </button>
          </NavHashLink>
        </div>
        {/* banner svg */}
        <div className="w-full md:w-1/2 pointer-events-none">
          <div className="w-fit">
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              width={isDesktop ? 500 : isTablet ? 400 : 300}
            />
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Banner;
