import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="fixed bottom-0  w-full flex justify-center border pt-3 bg-gray-100">
      <div className="flex justify-between mb-2 w-11/12 max-w-[500px]">
        <div className="flex gap-x-">
          {page > 1 && (
            <button
              className="rounded-md border-2 px-4 py-1 bg-white"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="rounded-md border-2 px-4 py-1 bg-white"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>

        <p className="font-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
