import { Button } from 'react-bootstrap'

import Styles from "../../styles/search.module.scss"

const SearchBtn = ({setSearch,setPageNumber}) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  const handleSearch=(e)=>{
    setSearch(e.target.value)
    setPageNumber(1)
  }

  
  return (
    <>
        <form className='d-flex justify-content-center gap-4 mb-5'>
            <input type="text"  onChange={handleSearch} placeholder='Search for character'  className={Styles.input} /> 
              <Button   onClick={searchBtn} variant="primary" className={Styles.search_btn}>search</Button>
        </form>
    </>
  )
}

export default SearchBtn
