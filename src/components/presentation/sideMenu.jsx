import React from 'react'
import { Col } from 'react-bootstrap'
import Gender from '../category/gender'
import Species from '../category/species'
import Status from '../category/status'

const SideMenu = ({setStatus,setPageNumber,setGender,setSpecies ,setResult }) => {
  return (
       <Col md={3} xs={12}>
           <div className='text-center fs-4 fw-bold mb-3'>Filters</div>
           <div  onClick={()=>setResult([])}  style={{cursor:"pointer"}}   className='text-center text-primary mb-4  text-decoration-underline '>Clear Filters</div>
           <div> 
           <Status 
             setStatus={setStatus}
             setPageNumber={setPageNumber}
             
           />
            <Species  setSpecies={setSpecies} />
            <Gender  setGender={setGender} />
           
            </div>
       </Col>
  )
}

export default SideMenu