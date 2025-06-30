import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'

import { setCurrentPage } from '../../../store/filter/slice'
import styles from './styles.module.scss'

export const Pagination = () => {
  const dispatch = useDispatch()

  const { currentPage } = useSelector((state) => state.filter)

  const handleChangeCurrentPage = (event) => dispatch(setCurrentPage(event.selected + 1))

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
        forcePage={currentPage - 1}
      />
    </div>
  )
}
