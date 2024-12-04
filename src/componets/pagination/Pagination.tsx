import { FC } from "react";
import { PaginationProps } from "../../interfaces/props";

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <>
      <nav aria-label="Page navigation example" className="flex justify-center m-5">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <button
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 rounded-s-lg 
            ${
              currentPage === 1
                ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            }`}
              onClick={() => handleClick(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                className={`flex items-center justify-center px-3 h-8 leading-tight border 
              ${
                currentPage === index + 1
                  ? "text-blue-600 bg-blue-50 border-gray-300"
                  : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
              }`}
                onClick={() => handleClick(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}

          <li>
            <button
              className={`flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg 
            ${
              currentPage === totalPages
                ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            }`}
              onClick={() => handleClick(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
