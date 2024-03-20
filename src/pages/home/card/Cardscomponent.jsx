import axios from 'axios'
import React, { useEffect, useState ,addToCart} from 'react'
import './Cardcomponent.css'
import { ToastContainer, toast } from 'react-toastify'
const Cardscomponent = ({setLengthCart,setCartId,ideas,click}) => {
    const [data,setData]=useState(null)
   
    const [showdescription, setShowDescription] = useState(false);
    async function getDataId() {
        const {data}=await axios.get('https://api.escuelajs.co/api/v1/products/'+ideas)
        setData(data);
    }
    useEffect(()=>{
        getDataId(ideas)
    },[ideas])
    console.log(data);

    if(!data){
        return <h2>Loading</h2>
    }
    const showclick=()=>{
      setShowDescription(!showdescription)
    }
    const {title,price,description,images}=data
    const namecart=data.category.name
const dataproduct={
  id:ideas,
  title:title,
  price:price,
  namecategory:namecart,
  images:images[0]
}

   const addtocart=()=>{
    setCartId(prevstate=>[...prevstate,dataproduct])
    toast.success('Ваш товар добавлен корзину')

   }
   const addtofavorites=(id)=>{
    toast.warning('Данное функция временно не работает')
   }
  return (
    <div className='card-container'>
          <div className='card-cards'>
          <img className='card-big-image' src={data.images[0]} alt="" />
          <div className='card-small-images'>
            {data.images.filter((el,index)=>index!==0).map((el,index)=>(
              <img className='card-small-image' key={index} src={el} alt="" />
            ))}
          </div></div>
        <div className='card-info'>
       <p>{title}</p>
       <h3>{price}$</h3>
       <p>{showdescription?description:`${description.slice(0,150)}...`}</p>
       <button className='card-show-hidden-btn' onClick={showclick}>{showdescription?'Hidden':'Show'}</button>
       <div className='card-all-btn'>
        <button onClick={()=>addtocart()} className='card-btn-add'>Add to cart</button>
        <button className='card-btn-favorites' onClick={()=>addtofavorites(ideas)}>Add to favorites</button>
       </div>
       <button className='card-btn-add' onClick={click}>Back</button>
        </div> 
        <ToastContainer/>
    </div>
  )
}

export default Cardscomponent