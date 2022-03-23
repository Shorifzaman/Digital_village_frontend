import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import axios from '../../../../api/axios';

const StatusCheck = () => {
  const user = useSelector((state) => state.user.user);
  const [info, setInfo] = useState([]);
  const email = user.email;
  useEffect(() => {
    axios.get(`/vaccine/findAllInfo`).then((response) => {
      setInfo(response.data);
      console.log(response.data);
    });
  }, []);
  const handleStatus = (dt) => {
    console.log(dt);
    swal({
      title: 'Make sure all the information  valid.Want to proceed?',
      // text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        console.log('ok');
        swal('Registration Done.', {
          icon: 'success',
        });

        axios
          .put('/vaccine/updateInfo', dt)

          .then((response) => {
            console.log(response.data);
          });
      }
    });
  };
  return (
    <div class="bg-gray-50 min-h-screen">
      <div>
        <div class="p-4">
          <div class="bg-white p-4 rounded-md">
            <div>
              <h2 class="mb-4 text-xl font-bold text-gray-700 dark:text-dark_text">
                Approve application
              </h2>
              <div>
                <div>
                  <div class="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                    <div className="w-1/3">
                      <span>Name</span>
                    </div>
                    <div className="w-1/3">
                      <span>Email</span>
                    </div>

                    <div className="w-1/3">
                      <span>Edit</span>
                    </div>
                  </div>
                  <div>
                    {info.map((row) => (
                      <div class="flex justify-between border-2 text-sm font-normal mt-4 space-x-4">
                        <div className="w-1/3">
                          <span>{row.name}</span>
                        </div>
                        <div>
                          <span>{row.email}</span>
                        </div>

                        <div class="w-1/3">
                          <button
                            className="border-2 g bg-blue-900  text-white py-2 px-5"
                            onClick={() => handleStatus(row)}
                          >
                            Approve
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusCheck;
