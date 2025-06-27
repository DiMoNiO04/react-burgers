import ReactPaginate from 'react-paginate'

import styles from './styles.module.scss'

export const Pagination = ({ onChangePage, currentPage }) => {
  return (
    <div>
      <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={onChangePage}
        pageRangeDisplayed={8}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={currentPage - 1}
      />
    </div>
  )
}
