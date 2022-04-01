import { Accordion } from 'react-bootstrap'
import FilterBtn from '../frequentlyuse/filterBtn'

const Status = ({setStatus,setPageNumber}) => {

      let status=["Alive","Dead","unknown"]
  return (

    <Accordion flush>
    <Accordion.Item >
      <Accordion.Header>Status</Accordion.Header>
      <Accordion.Body className='d-flex flex-wrap gap-3'>
          {status.map((item,index)=>(
            <FilterBtn key={index}   task={setStatus} setPageNumber={setPageNumber} name="status" index={index} item={item} />
          ))}
   
             
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}

export default Status