import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const MAX_DISPLAY_PAGES = 5;

  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(currentPage - Math.floor(MAX_DISPLAY_PAGES / 2), 1);
    let endPage = startPage + MAX_DISPLAY_PAGES - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - MAX_DISPLAY_PAGES + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 mx-1 border rounded disabled:opacity-50"
      >
        &lt;
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 mx-1 border rounded ${currentPage === page ? 'bg-blue-500 text-white' : ''}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 mx-1 border rounded disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
