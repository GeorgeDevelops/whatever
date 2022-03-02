import React from "react";
import _ from "lodash";

const Pagination = ({ items, pageSize, onPageChange, currentPage } ) => {
  let pagesCount = Math.round(items / pageSize);
  let pages = _.range(1, pagesCount + 1);

  return (
    <React.Fragment>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
            { pages.map(page => <li key={page} className={currentPage === page ? 'page-item active' : 'page-item'}>
              <a className="page-link" onClick={()=> onPageChange(page)}>{page}</a>
            </li>)}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;