import React from 'react'

const Episodeside = ({total,name,setId,pickup}) => {
  return (
    <>
    <div>
      <h4 className="text-center">{pickup === "episdode" ? " Take Episode" :"Take Location "}</h4>
    </div>
       
  <select onChange={(e)=>setId(e.target.value)} style={{width:"100%",height:'30px'}} class="custom-select mt-1" id={name}>
    <option  selected>Choose...</option>
    {[...Array(total).keys()].map((num)=>{
        return  <option value={num + 1}> {name} -{num + 1}</option>
       
    })}
    
   
  </select>

</>
  )
}

export default Episodeside
