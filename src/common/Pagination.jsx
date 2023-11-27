import React from 'react';
import { AiOutlineDoubleRight,AiOutlineDoubleLeft } from 'react-icons/ai';
const Pagination = ({ page, totalPages, onPageChange }) => {
  const handlePreviousPage = () => {
    if (page > 1) {
      onPageChange(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      onPageChange(page + 1);
    }
  };

  return (
    <nav className="my-5 mb-20 lg:mb-8">
      <ul className="flex">
        <li>
          <button
            disabled={page === 1}
            onClick={handlePreviousPage}
            className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            aria-label="Previous"
          >
            <AiOutlineDoubleLeft/>
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <li key={pageNumber}>
            <button
              onClick={() => onPageChange(pageNumber)}
              className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full ${
                pageNumber === page
                  ? 'bg-primary text-white shadow-md'
                  : 'border border-blue-gray-100 bg-transparent text-blue-gray-500'
              } p-0 text-sm transition duration-150 ease-in-out hover:bg-light-300`}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={page === totalPages}
            onClick={handleNextPage}
            className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            aria-label="Next"
          >
            <AiOutlineDoubleRight/>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
