const Pagination = ({
  productsPorPage,
  totalProducts,
  currentPage,
  setCurrentPage
}) => {
  const pageNumbers = []

  // for para crear pagesNumber
  for (let i = 1; i <= Math.ceil(totalProducts / productsPorPage); i++) {
    pageNumbers.push(i)
  }

  // para los botones

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const onNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const onSpecificPage = page => {
    setCurrentPage(page)
  }

  return (
    <nav
      className='pagination is-centered mt-2 mb-6'
      role='navigation'
      aria-label='pagination'
    >
      <a
        className={`pagination-previous ${currentPage === 1 && 'is-disabled'}`}
        onClick={onPreviousPage}
      >
        Anterior
      </a>
      <a
        className={`pagination-next ${
          currentPage >= pageNumbers.length && 'is-disabled'
        }`}
        onClick={onNextPage}
      >
        Siguiente
      </a>

      <ul className='pagination-list'>
        {pageNumbers.map(noPage => (
          <li key={noPage}>
            <a
              className={`pagination-link ${
                noPage === currentPage && 'is-current'
              }`}
              onClick={() => onSpecificPage(noPage)}
            >
              {noPage}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Pagination
