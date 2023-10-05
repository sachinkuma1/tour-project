import { useState } from "react";

const image="https://bsmedia.business-standard.com/_media/bs/img/article/2019-12/30/full/1577714480-9818.jpg?im=FeatureCrop,size=(826,465)";

const List=({data, remove})=>{
    const [open, setOpen]=useState(false);
  return (
    data.map((tour)=>{
        const { name, info, id} =tour;
        return (
            <>
            <div>{name}</div>
            
                <img  scr={image} />
          <p>{open?info:"info ka substring ......."}</p>
          <button  onClick={()=>setOpen(!open)}>
            {open?"show less":"read more "}
          </button>
           
           <button onClick={()=>remove(id)}>not interested</button>
            </>
        )
  })

  )
}
export default List;