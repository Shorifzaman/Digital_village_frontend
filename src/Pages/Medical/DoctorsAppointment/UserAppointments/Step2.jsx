import React from 'react';
import Lottie from 'react-lottie';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import animationData from '../../../../lotties/s_click.json';

const Step3 = () => {
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
    <div className="border-1 rounded-lg ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center py-2 px-2 md:px-10 ">
        {/* banner description */}
        <div className=" flex flex-col  justify-center items-start   order-2 md:order-1 text-left  ">
          <h3 className="text-start text-xl md:text-2xl ">
            Step <span className=" text-xl md:text-4xl text-blue-900">2</span>
          </h3>
          <h6 className="text-left text-md text-blue-900">click pay</h6>
          <p className="text-left text-sm  mt-2">
            Click the pay button of the appointment you want to pay for
          </p>
        </div>

        {/* banner svg */}
        <div className="w-full md:w-1/3 pointer-events-none  lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 order-1 md:order-2 lg:order-3">
          <div className="w-fit flex items-center md:items-end  mx-0 md:mx-auto ">
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              width={isDesktop ? 250 : isTablet ? 100 : 100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
