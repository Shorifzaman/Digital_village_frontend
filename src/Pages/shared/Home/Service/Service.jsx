import React, { useState } from 'react';
import {
  FcCalendar,
  FcDonate,
  FcGraduationCap,
  FcHome,
  FcShop,
} from 'react-icons/fc';
import { MdLocalHospital } from 'react-icons/md';
import donate from './../../../../assets/donate.png';
import event from './../../../../assets/event.png';
import medical from './../../../../assets/healthcare.png';
import education from './../../../../assets/learn.png';
import people from './../../../../assets/learn2.png';
import ServiceBoard from './ServiceBoard/ServiceBoard';
import ServiceExplore from './ServiceExplore/ServiceExplore';

const services = [
  {
    icon: <FcGraduationCap className="text-center" size={70} />,
    name: 'Digital Learning',
    image: education,
    detail:
      'Our project sector is e-governance. It will be a great platform to connect villagers with the village administration.',
    desc: 'Digital Village Service!',
    controlData: 'education',
  },
  {
    icon: <MdLocalHospital className="text-center" size={70} />,
    name: 'Medical',
    image: medical,
    detail:
      'Our project sector is e-governance. It will be a great platform to connect villagers with the village administration.',
    desc: 'Digital Village Service!',
    controlData: 'healthcare',
  },
  {
    icon: <FcCalendar className="text-center" size={70} />,
    name: 'Events',
    image: event,
    detail:
      'Our project sector is e-governance. It will be a great platform to connect villagers with the village administration.',
    desc: 'Digital Village Service!',
    controlData: 'events',
  },
  {
    icon: <FcDonate className="text-center" size={70} />,
    name: 'Donations',
    image: donate,
    detail:
      'Our project sector is e-governance. It will be a great platform to connect villagers with the village administration.',
    desc: 'Development proposal',
    controlData: 'donation',
  },
  {
    icon: <FcHome className="text-center" size={70} />,
    name: 'Development',
    image: people,
    detail:
      'Our project sector is e-governance. It will be a great platform to connect villagers with the village administration.',
    desc: 'Propose your thoughts here',
    controlData: 'development',
  },
  {
    icon: <FcShop className="text-center" size={70} />,
    name: 'E-Market',
    image:
      'https://weirdguru.com/wp-content/uploads/2020/12/custom-ecommerce-website-development-vector-image.png',
    detail:
      'Our project sector is e-governance. It will be a great platform to connect villagers with the village administration.',
    desc: 'Digital Village Service!',
    controlData: 'e-market',
  },
];

const Service = () => {
  const [control, setControl] = useState('education');

  return (
    <section
      id="service"
      className="space-y-6 md:space-y-0 flex flex-wrap py-8 mt-16"
    >
      <div className="w-full lg:w-1/2 space-y-3 md:space-y-6 text-center md:text-left">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {services.map((service) => (
            <ServiceBoard
              key={service.name}
              setControl={setControl}
              control={control}
              service={service}
            ></ServiceBoard>
          ))}
        </div>
      </div>

      {services.map(
        (service) =>
          control === service.controlData && (
            <ServiceExplore key={service.name} service={service} />
          )
      )}
    </section>
  );
};

export default Service;
