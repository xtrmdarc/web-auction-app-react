import React from 'react';

const PaginationLinks = (props) => {
  const {items, pagination} = props;

  const maxPaginationNumber = items.length / pagination.itemsPerPage;
  const paginationLinks = [];
  for(let i = 1; i <= maxPaginationNumber; i++) {
    paginationLinks.push(<div className={`link ${i-1 === pagination.currentPage ? 'selected' : ''}`}>{i}</div>)
  }

  return (
    <div className="PaginationLinks">
      {paginationLinks}
    </div>
  );
}

export default PaginationLinks;
