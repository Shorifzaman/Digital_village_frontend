import React, { useEffect, useState } from 'react';
import axios from '../../../../../api/axios';
import PopularMedicine from './PopularMedicine/PopularMedicine';
import RegularMedicine from './RegularMedicine/RegularMedicine';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../../../../redux/slices/eMarket/modalSlice';
import AddToCart from '../../../MarketComponents/AddToCart';

const AllMedicine = () => {
  const dispatch = useDispatch();
  const [medicines, setMedicines] = useState([]);
  const [medicine, setMedicine] = useState({});
  useEffect(() => {
    axios.get('/eMarket/medicines').then((res) => setMedicines(res.data));
  }, []);
  const handleAddToCart = (medicine) => {
    setMedicine(medicine);
    dispatch(setShowModal(true));
  };
  return (
    <div className="grid grid-cols-6 mt-20 ">
      <div className="col-span-6 md:col-span-4 order-2 md:order-1">
        {/* RegularMedicine */}
        <h6 className="inline border-b-2 border-black ml-6 md:ml-14">
          Regular Medicines
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-11/12 mx-auto mt-6">
          {medicines.map((medicine) => (
            <RegularMedicine
              key={medicine._id}
              medicine={medicine}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      {/* PopularMedicine */}
      <div className="col-span-6 md:col-span-2 order-1 md:order-2">
        <PopularMedicine />
      </div>
      <AddToCart product={medicine} />
    </div>
  );
};

export default AllMedicine;
