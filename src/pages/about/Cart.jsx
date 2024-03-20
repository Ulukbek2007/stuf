import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = ({cartid,setLengthCart}) => {
    const navigate=useNavigate()
    const click=()=>{
        navigate(-1)
    }
    const filterDublicate = cartid.filter((el, index, self) =>
    index === self.findIndex((t) => (
        t.id === el.id
    ))
);
const delCart=(id)=>{
  const remove=filterDublicate.filter(el=>el.id!==id)
  setLengthCart(remove.length)
  console.log(remove);
}
  return (
    <div>
        <button onClick={click}>back</button>
        
        {filterDublicate.map(el=>(
          <div key={el.id}>
            <h1>{el.title}</h1>
            <img width={250} src={el.images} alt="" />
            <button onClick={()=>delCart(el.id)}>del</button>
            </div>
          
        ))}
    </div>
  )
}

export default Cart
