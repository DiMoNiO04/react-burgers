import { useContext } from 'react'
import ReactPaginate from 'react-paginate'

import { PaginationContext } from '../../../context'
import styles from './styles.module.scss'

export const Pagination = () => {
  const { page, setPage } = useContext(PaginationContext)

  const handleChangeCurrentPage = (event) => setPage(event.selected + 1)

  return (
    <div>
      <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handleChangeCurrentPage}
        pageRangeDisplayed={8}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />
    </div>
  )
}
