import React from "react";
import Card from "../Components/Card";

import { useGetStatusQuery } from "../features/statusApi/statusApi";

const Home = () => {
  const { data: statusData, isLoading: statusIsloading } = useGetStatusQuery();

  return (
    <div className="mx-8 my-5   ">
      <div className=" flex gap-5 ">
        {!statusIsloading &&
          statusData?.message?.map((data) => {
            return <Card name={data.name} key={data._id} />;
          })}
      </div>
    </div>
  );
};

export default Home;
