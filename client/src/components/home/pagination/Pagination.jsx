import { pagination } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux";


const Pagination = (props) => {
  const { page, total } = props
  const dispatch = useDispatch();

  const numberPages = Math.ceil((total/15));
  
  const paginatorArr = [...Array(numberPages).keys()];

  const setPage = (e, value) => {
    dispatch(pagination(e.target.value));
  }
  return (
    <div>
      <button value={0} onClick={setPage}>{'<<'}</button>
      <button value={page-1} onClick={setPage}>{'<'}</button>
      {paginatorArr.map( i => (
        <button value={i} key={i} onClick={setPage}>{i+1}</button>
      ))}
      <button value={page+1} onClick={setPage}>{'>'}</button>
      <button value={numberPages-1} onClick={setPage}>{'>>'}</button>
    </div>

    
  )
}

export default Pagination;