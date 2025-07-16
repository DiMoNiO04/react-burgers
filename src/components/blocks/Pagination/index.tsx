import ReactPaginate from 'react-paginate'

import { selectFilter } from '@/store/filter/selectors'
import { setCurrentPage } from '@/store/filter/slice'
import { useAppDispatch, useAppSelector } from '@/store/store'

import styles from './styles.module.scss'

interface ISelectedItem {
  selected: number
}

export const Pagination = () => {
  const dispatch = useAppDispatch()

  const { currentPage } = useAppSelector(selectFilter)

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
