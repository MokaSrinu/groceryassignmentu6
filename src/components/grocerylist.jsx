
const Grocerylist=({data,handleDelete})=>{
    return(
      <>
       {data
          .map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <h1>{item.title}</h1>
              <button onClick={() => handleDelete(item.id)}>DELETE</button>
            </div>
          ))}
      </>
    )
  }
  export {Grocerylist}