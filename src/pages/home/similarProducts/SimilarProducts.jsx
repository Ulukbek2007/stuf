import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../../store/slices/dataSlice'
import axios from 'axios'
import './SimilarProducts.css'
import Cardscomponent from '../card/Cardscomponent'
const SimilarProducts = ({ getId, view }) => {
    const { productsData } = useSelector(state => state.product)
    const [data, setData] = useState(null)
    const [see, setSee] = useState(false);
    const [asd, setAsd] = useState(false)
    async function datas() {
        const { data } = await axios.get('https://api.escuelajs.co/api/v1/products/' + getId)
        setData(data)
    }
    const dispatch = useDispatch()
    useEffect(() => {
        datas()
        dispatch(getProduct())
    }, [getId])
    if (data === null) {
        return <h2>loading</h2>
    }
    const filter = productsData.filter(el => el.category.name === data.category.name)
    const seemore = () => {
        setSee(!see);
    }
  
    return (
       <div className='product-container'>
            <h2>Related products</h2>
            <div className={see ? 'product-filter-all' : 'product-cart'}>{filter.map((el) => (
                <div key={el.id} className='product-similar'>
                    <img src={el.images[0]} alt="" />
                    <div className='product-text'><h1 style={{ fontSize: '15px' }}>{el.title.slice(0, 15)}</h1>
                        <p>{el.category.name}</p>
                        <h2 className='product-price'>{el.price}$</h2></div>
                </div>

            ))}</div>
         
            <button onClick={seemore} className='product-btn-all'>{see ? 'Close' : 'See more '}</button>
        </div>
       
    )
}

export default SimilarProducts