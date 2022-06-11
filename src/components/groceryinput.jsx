import React from "react";

const Groceryinput=({handleAdd})=>{
    const [title,setTitle]=React.useState("");
    return(
      <>
      <input type="text" placeholder="Input the Grocery..." value={title} 
      onChange={(event)=>{
        setTitle(event.target.value);
      }}
      />
      <button onClick={()=>{
         handleAdd(title);
         setTitle("");
      }}>ADD</button>
      </>
    )
  }
  export {Groceryinput};
  