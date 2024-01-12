import React from "react";
import CardElement from "./CardElement";
import { useGetClientsByStatusQuery } from "../features/clientApi/clientApi";

const Card = ({ name }) => {
  let color;
  if (name === "Incomplete") {
    color = "bg-red-600";
  } else if (name === "To Do") {
    color = "bg-blue-600";
  } else if (name === "Doing") {
    color = "bg-amber-300";
  } else {
    color = null;
  }
  const { data: userData, isLoading } = useGetClientsByStatusQuery();
  return (
    <div className="bg-gray-100  min-w-[400px] p-2  pb-5 h-full">
      <div className="flex justify-between items-center mb-3">
        <div className="font-semibold text-slate-600 flex items-center gap-2">
          <div
            className={`h-4 w-4 ${color ? color : ""} ${
              color === null ? "hidden" : "visible"
            } rounded-l-xl`}
          ></div>
          {name}
        </div>
        <span className="bg-gray-200 py-1 px-2 font-semibold text-slate-600">
          0
        </span>
      </div>
      <div className="h-[85vh] overflow-y-auto pr-1">
        {!isLoading &&
          userData?.message?.map((data) => {
            return <CardElement data={data} key={data._id} />;
          })}
      </div>
    </div>
  );
};

export default Card;
