import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { MyPaginate } from './styles' 

export const Paginator = ({setCurrentPage, totalPages}: any) => {
  const handlePageClick = ({ selected }: any) => {
    console.log(selected)
    setCurrentPage(selected);
  }
  
  return (
    
      <MyPaginate
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        previousLabel={<a href="/#"> <AiOutlineArrowLeft/> <p>Anterior</p></a>} 
        nextLabel={<a href="/#"><p>Próxima</p> <AiOutlineArrowRight/> </a>}
        pageCount={totalPages}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        activeClassName={"active"}
      />


  )


}