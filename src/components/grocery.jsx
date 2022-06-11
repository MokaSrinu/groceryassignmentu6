import React from "react";
import {Grocerylist} from "./grocerylist";
import { Groceryinput } from "./groceryinput";
import { v4 as uuid } from "uuid";
const Grocery=()=>{
    const [data,setData]=React.useState([]);
  
    // adding the items to grocery list
    const handleAdd = (title) => {
      const groceryItem = {
        title: title,
        id: uuid() 
      };
      setData([...data, groceryItem]);
    };
  
    // deleting the items in grocery list
    const handleDelete = (id) => {
      const updatedData = data.filter((todo) => todo.id !== id); 
      setData(updatedData);
    };
  
    
    return(
      <>
      <h1 style={{color:"teal"}}>Grocery App</h1>
      <Groceryinput handleAdd={handleAdd}/>
      <Grocerylist data={data} handleDelete={handleDelete}/>
      </>
    )
  }

  export {Grocery};