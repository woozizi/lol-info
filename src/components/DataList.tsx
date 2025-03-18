import React from "react";

const DataList = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="container mx-auto mt-10 flex flex-col justify-center">
      <h1 className="mb-8 text-3xl font-bold text-red-500">{title}</h1>
      <div className="grid grid-cols-6 gap-4">{children}</div>
    </div>
  );
};

export default DataList;
