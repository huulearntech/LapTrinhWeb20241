import {
  FaAngleLeft as PreviousIcon,
  FaAngleRight as NextIcon
} from "react-icons/fa6";

const ELLIPSIS = "...";
const generatePageRange = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

// let visiblePageRange = [];
// if (totalPages <= maxVisiblePages) {
//   visiblePageRange = generatePageRange(1, totalPages);
// } else if (currentPage <= Math.floor(maxVisiblePages / 2)) {
//   visiblePageRange = [...generatePageRange(1, maxVisiblePages - 1), ELLIPSIS, totalPages];
// } else if (currentPage > totalPages - Math.floor(maxVisiblePages / 2)) {
//   visiblePageRange = [1, ELLIPSIS, ...generatePageRange(totalPages - maxVisiblePages + 2, totalPages)];
// } else {
//   visiblePageRange = [1, ELLIPSIS, ...generatePageRange(currentPage - Math.floor(maxVisiblePages / 2) + 1, currentPage + Math.floor(maxVisiblePages / 2) - 1), ELLIPSIS, totalPages];
// }


const PaginationBar = ({ currentPage, totalPages, onPageChange, maxVisiblePages = 7 }) => {
  const visiblePageRange = [];
  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      visiblePageRange.push(i);
    }
  } else if (currentPage <= maxVisiblePages - Math.floor((maxVisiblePages - 2) / 2)) {
    for (let i = 1; i <= maxVisiblePages; i++) {
      visiblePageRange.push(i);
    }
    if (totalPages > maxVisiblePages + 1) {
      visiblePageRange.push(ELLIPSIS);
    }
    visiblePageRange.push(totalPages);
  } else if (currentPage >= totalPages - maxVisiblePages + Math.ceil((maxVisiblePages - 2) / 2)) {
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
    const startPage = currentPage - Math.floor(maxVisiblePages / 2) + 1;
    const endPage = currentPage + Math.floor(maxVisiblePages / 2) - 1;
    for (let i = startPage; i <= endPage; i++) {
      visiblePageRange.push(i);
    }
    visiblePageRange.push(ELLIPSIS);
    visiblePageRange.push(totalPages);
  }


  const buttonClass = "flex size-8 items-center justify-center border rounded disabled:bg-gray-200 disabled:text-gray-400";
  const unselectedButtonClass = "bg-white text-blue-500 hover:bg-blue-100";
  const selectedButtonClass = "bg-blue-500 text-white font-bold hover:bg-blue-600";

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          className={`${buttonClass} bg-white text-blue-500 hover:bg-blue-100`}
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
          className={`${buttonClass} bg-white text-blue-500 hover:bg-blue-100`}
        >
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

export default PaginationBar;
