const FilterBtn = ({name,index,item,task,setPageNumber}) => {

  return (
    <>
      <div>
       <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div class="form-check ">
        <input
          onClick={()=>{
            task(item)
            setPageNumber(1)

          }}
         
          class="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {item}
        </label>
      </div>
      </div>
    </>
  );
};

export default FilterBtn;
