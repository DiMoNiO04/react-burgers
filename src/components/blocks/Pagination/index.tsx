import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'

import { selectFilter, setCurrentPage } from '@/store/filter/slice'

import styles from './styles.module.scss'

interface ISelectedItem {
  selected: number
}

export const Pagination = () => {
  const dispatch = useDispatch()

  const { currentPage } = useSelector(selectFilter)

  const handleChangeCurrentPage = (event: ISelectedItem) => dispatch(setCurrentPage(event.selected + 1))

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
