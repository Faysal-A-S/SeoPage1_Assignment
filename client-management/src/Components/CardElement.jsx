import React, { useState } from "react";
import { RiStackFill, RiWechatLine } from "react-icons/ri";
import { GrAttachment } from "react-icons/gr";
import { CgCalendarDates } from "react-icons/cg";
import { MdWork, MdOutlinePersonOutline } from "react-icons/md";
import Modal from "./Modal";
const CardElement = ({ data }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="bg-white w-full p-2 mb-4 ">
      {modal && <Modal setModal={setModal} userId={data._id} />}
      <div className="flex justify-between mb-2">
        <h1 className="flex items-center gap-2">
          <MdOutlinePersonOutline />
          {data.name}
        </h1>
        <div className="flex items-center gap-2">
          <MdOutlinePersonOutline />
          Testing
        </div>
      </div>
      <div className="flex justify-between mb-2 items-center ">
        <div className=" text-slate-600 flex items-center gap-2 ">
          <RiStackFill size={60} />
          <h1 className="text-sm  line-clamp-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta
            veritatis aperiam qui, aliquam explicabo eos quam velit? Adipisci
            hic porro minima ipsum. Dolorum, voluptatem. Enim deleniti officiis
            dicta nostrum!
          </h1>
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 bg-gray-100 px-1 py-1 rounded-md">
          <MdWork />
          <span>1/2</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="h-6 w-6 bg-blue-400 rounded-full"></div>
        <div className="h-6 w-6 bg-orange-400 rounded-full"></div>
        <div className=" bg-gray-100 rounded-full text-sm font-semibold text-slate-600 p-1">
          12+
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
          <RiWechatLine size={20} />
          15
        </div>
        <button
          className="flex items-center gap-2 text-sm font-semibold text-slate-600"
          onClick={() => setModal(true)}
        >
          <GrAttachment />
          {data.attachments.length}
        </button>
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
          <CgCalendarDates size={20} />
          30-12-2023
        </div>
      </div>
    </div>
  );
};

export default CardElement;
