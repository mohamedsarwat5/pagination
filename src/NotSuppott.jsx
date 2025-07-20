import React, { useEffect, useState } from "react";
import alldata from "./allData.js";
const NotSuppott = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;
  let totalPages = Math.ceil(alldata.length / ITEMS_PER_PAGE); // 10
  let startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  let currentData = alldata.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`cursor-pointer transition-all duration-150 px-4 py-2 border rounded-md
            ${
              currentPage === i
                ? "bg-rose-500 text-white font-bold"
                : "bg-white text-black"
            }`}
        >
          {i}
        </button>
      );
    }

    return <div className="flex flex-wrap gap-2">{pages}</div>;
  };

  let today = new Date();
  today.setMonth(11);
  let dayNumber = today.getMonth();
  console.log(today);

  return (
    <>
      <div className="grid md:grid-cols-5 auto-rows-[200px] gap-3 p-4 px-4 md:px-12">
        {currentData?.map((el, i) => (
          <h2
            key={i}
            className="bg-indigo-500 text-center px-2 flex items-center justify-center font-bold text-2xl text-white"
          >
            {el.title}
          </h2>
        ))}
      </div>

      <div className="px-12 flex justify-between items-center flex-wrap gap-4 mt-4">
        <button
          disabled={currentPage === 1}
          className="disabled:opacity-50 bg-rose-500 text-2xl text-white px-6 py-3 rounded-md"
          onClick={handlePrev}
        >
          Prev
        </button>

        {renderPageNumbers()}

        <button
          disabled={currentPage === totalPages}
          className="disabled:opacity-50 bg-rose-500 text-2xl text-white px-6 py-3 rounded-md"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default NotSuppott;
