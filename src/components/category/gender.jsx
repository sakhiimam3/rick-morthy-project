import React from 'react'
import { Accordion } from 'react-bootstrap'
import FilterBtn from '../frequentlyuse/filterBtn'

const Gender = ({setGender}) => {
    let gender=["female", "male", "genderless" , "unknown"]
  return (
    <Accordion  defaultActiveKey="0" flush>
    <Accordion.Item eventKey="0">
      <Accordion.Header >Gender</Accordion.Header>
      <Accordion.Body className='d-flex flex-wrap gap-3'>
      {gender.map((item,index)=>(
            <FilterBtn key={index} task={setGender} name="gender" index={index} item={item} />
          ))}
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}

export default Gender