import React from 'react'
import { Accordion } from 'react-bootstrap'
import FilterBtn from '../frequentlyuse/filterBtn'

const Species = ({setSpecies}) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ];
  return (
    <Accordion defaultActiveKey="0" flush>
    <Accordion.Item eventKey="0">
      <Accordion.Header  >Species</Accordion.Header>
      <Accordion.Body className='d-flex flex-wrap gap-3'>
      {species.map((item,index)=>(
            <FilterBtn key={index} task={setSpecies} name="species" index={index} item={item} />
          ))}
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}

export default Species