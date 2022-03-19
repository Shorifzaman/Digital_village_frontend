import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="lg:min-w-[280px] min-w-full flex flex-col justify-center items-center p-4 rounded-lg bg-white dark:dark-card-bg hover:shadow-2xl cursor-pointer space-y-4 border-2 border-info lg:h-[150px]">
      <div className="text-6xl">{category?.icon}</div>
      <div>{category?.name}</div>
    </div>
  );
};

export default CategoryCard;
