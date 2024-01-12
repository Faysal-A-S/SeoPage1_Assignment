import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useUpdateClientMutation } from "../features/clientApi/clientApi";
const Modal = ({ setModal, userId }) => {
  const [file, setFiles] = useState(null);
  console.log(file);
  const [updateClient] = useUpdateClientMutation();

  const handleOnchange = (e) => {
    setFiles(e.target.files);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file.length === 0) {
    } else {
      const formData = new FormData();
      for (let i = 0; i < file.length; i++) {
        formData.append(`data`, file[i]);
      }

      await updateClient({ formData, userId });
      setModal(false);
    }
  };
  return (
    <div
      className="m-2 md:m-0 fixed inset-0 flex justify-center items-center transition-colors
    bg-gray-300 bg-opacity-80"
    >
      <div className="w-[600px] bg-white p-2">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-lg">Attachments</h1>
          <button onClick={() => setModal(false)}>
            <IoCloseSharp className="hover:text-red-500" size={25} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            multiple
            onChange={handleOnchange}
            className="text-sm text-stone-500
   file:mr-5 file:py-1 file:px-3 file:border-[1px]
   file:text-xs file:font-medium
   file:bg-stone-50 file:text-stone-700
   hover:file:cursor-pointer hover:file:bg-blue-50
   hover:file:text-blue-700"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white text-center px-4 rounded-md p-2 font-bold md:text-lg text-md hover:bg-blue-700 ease-out duration-300"
          >
            Submit data
          </button>
        </form>

        <div className="flex flex-col">
          <h1 className="font-black text-xl">Selected Files:</h1>

          {file &&
            Object.keys(file).map((data, index) => {
              return (
                <h1 className="font-bold" key={index}>
                  {file[data].name}
                </h1>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
