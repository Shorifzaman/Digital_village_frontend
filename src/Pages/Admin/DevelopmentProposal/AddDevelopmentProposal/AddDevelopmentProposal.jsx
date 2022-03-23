import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from '../../../../api/axios';
import FileUpload from '../../../../Components/FileUpload';

const AddDevelopmentProposal = () => {
  const user = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [file, setFile] = useState({});

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleAddDevelopment = async (data) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'developmentProposal',
      JSON.stringify({
        ...data,
      })
    );

    const response = await axios.post('/developmentProposal/add', formData);
    if (response.data.title) {
      Swal.fire({
        title: 'successfully added your development proposal',
        confirmButtonText: 'Okay',
      });
      reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        confirmButtonText: 'Okay',
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleAddDevelopment)}
        className=" w-full md:w-1/2 mx-auto md:pt-24 space-y-3"
      >
        <h1 className="md:text-5xl text-xl text-center pt-3 md:py-4 text-primary font-bolder">
          Give Your Development Proposal
        </h1>
        <div className="  ">
          {/* title of your proposal */}
          <input
            className="px-7 py-6 my-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('title', { required: true })}
            placeholder="Title of your Development Proposal"
          />

          {/* file upload */}
          <div className="w-full mb-2">
            <FileUpload
              onDrop={onDrop}
              file={file}
              message="Upload a banner for your Development"
            />
          </div>

          {/* description for your proposal */}
          <textarea
            className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('description', { required: true })}
            placeholder="Write your development proposal"
          />
        </div>

        {/* submit button */}
        <input
          className="btn font-bolder py-4 bg-primary rounded-lg mb-2 w-full mx-auto cursor-pointer hover:bg-opacity-80  transition-all duration-300"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddDevelopmentProposal;
