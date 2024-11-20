import {
  FaAngleLeft as PreviousIcon,
  FaAngleRight as NextIcon
} from "react-icons/fa6";

const ELLIPSIS = "...";

const PaginationBar = ({ currentPage, totalPages, onPageChange, maxVisiblePages = 5 }) => {
  const visiblePageRange = [];
  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      visiblePageRange.push(i);
    }
  } else if (currentPage < maxVisiblePages) {
    for (let i = 1; i <= maxVisiblePages; i++) {
      visiblePageRange.push(i);
    }
    if (totalPages > maxVisiblePages + 1) {
      visiblePageRange.push(ELLIPSIS);
    }
    visiblePageRange.push(totalPages);
  } else if (currentPage > totalPages - maxVisiblePages) {
    visiblePageRange.push(1);
    if (totalPages > maxVisiblePages + 1) {
      visiblePageRange.push(ELLIPSIS);
    }
    for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
      visiblePageRange.push(i);
    }
  } else {
    visiblePageRange.push(1);
    visiblePageRange.push(ELLIPSIS);
    const startPage = currentPage - Math.floor(maxVisiblePages / 2);
    const endPage = currentPage + Math.floor(maxVisiblePages / 2);
    for (let i = startPage; i <= endPage; i++) {
      visiblePageRange.push(i);
    }
    visiblePageRange.push(ELLIPSIS);
    visiblePageRange.push(totalPages);
  }


  const buttonClass = "flex size-8 items-center justify-center border rounded disabled:bg-gray-200 disabled:text-gray-400";
  const unselectedButtonClass = "bg-white text-blue-500 border-blue-500 hover:bg-blue-100";
  const selectedButtonClass = "bg-blue-500 text-white font-bold hover:bg-blue-600";

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <div className="mt-6 flex justify-center items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          className={`${buttonClass} bg-blue-500 text-white hover:bg-blue-600`}
        >
          <PreviousIcon />
        </button>
        {visiblePageRange.map((page, index) =>
          typeof page === 'number' ? (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`${buttonClass} ${page === currentPage ? selectedButtonClass : unselectedButtonClass}`}
            >
              {page}
            </button>
          ) : (
            <div key={index} className="flex size-8 items-center justify-center text-gray-500">
              {page}
            </div>
          )
        )}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next Page"
          className={`${buttonClass} bg-blue-500 text-white hover:bg-blue-600`}
        >
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

export default PaginationBar;
