import React, { useEffect, useState } from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../store/slices/dataSlice'
import image from '../../img/image.svg'
import { uniqBy } from 'lodash'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import imageNewYear from '../../img/mageNewYear.svg'
import shoes from '../../img/shoemen.svg'
import playstation from '../../img/playstation.svg'
import 'react-toastify/dist/ReactToastify.css';
import Cardscomponent from './card/Cardscomponent'
import SimilarProducts from './similarProducts/SimilarProducts'
import Cart from '../about/Cart'
import AuthUser from '../authuser/AuthUser'
const Home = ({setConfirmPassword,setPassword,lastName,setLastName,setEmail,confirmpassword,setName,email,password,nameuser,changeSubmit,onclickOnchange,onclickFalse,setLengthCart,setCartId,view,activeForm}) => {
  const [componentView, setComponentView] = useState(true)
  const [getId, setGetId] = useState(null);
  const [filterdata, setFilterData] = useState(null)
  const { productsData } = useSelector(state => state.product)
  const [see, setSee] = useState(false)
  const [seeMore, setseeMore] = useState(false)
  const [Ideas,setIdeas]=useState(null)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
  }, [])
  if (productsData === null) {
    return <div>Loading...</div>
  }
  const resultFilter = uniqBy(productsData, 'category.name')
  const filterData = (e) => {
    setFilterData(e.target.innerText)
  }
  const seeMoreBtnFilter = () => {
    setseeMore(!seeMore)
  }
  const seemorebtn = () => {
    toast.success('Function completed successfully')
    setSee(!see)
  }
  const nulldata = () => {
    toast.error('No data')
  }

  const clicktotf = (params) => {
    setIdeas(params)
    setGetId(params);
    view(!componentView)
    setComponentView(!componentView)
  }
    const datafilter = productsData.filter(el => el.category.name === filterdata)
  return (
    <div className='home-container'>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
        <div className='home-page-one'>
          <h2>Categories</h2>
          {resultFilter.map(el => {
            return <ol key={el.category.name} className={filterdata === el.category.name ? 'home-text-btn' : 'home-text-warbtn'} onClick={filterData}>{el.category.name}</ol>;
          })}
        </div>
        {componentView?<div><img className='home-big-image' src={image} alt="" /></div>:null} 
        {componentView ? 
          <div className='home-page-two'>
            <h1 style={{ fontSize: '119px', color: ' #212123' }}>BIG SALE 20%</h1>
            <div style={{ position: 'relative' }}>
              <p style={{ color: '#616E74' }}>THE BESTSELLER OF 2024</p>
              <h1 style={{ fontSize: '42px' }}>LENNON R2D2 <br />
                WITH NVIDIA 5090 TI</h1>
              <button className='home-btn-shop'>Shop Now</button>
            </div>
          </div> : <Cardscomponent setLengthCart={setLengthCart} setCartId={setCartId} click={clicktotf} ideas={Ideas} getId={getId}/>}
      </div>
      {activeForm&&<AuthUser setConfirmPassword={setConfirmPassword} setPassword={setPassword} setLastName={setLastName} lastName={lastName} setEmail={setEmail}  confirmpassword={confirmpassword} setName={setName} email={email} password={password} nameuser={nameuser}  changeSubmit={changeSubmit} onclickOnchange={onclickOnchange} onclickFalse={onclickFalse}/>}
      {componentView ? <div className='home-product'>
        <h2 className='home-text-product'>Trending</h2>
        <div className={see === false ? 'home-filtered-product' : 'home-all-product'} >
          {productsData.filter(el => el.category.name === filterdata).sort((a, b) => a.price - b.price).map(el => (
            <div key={el.id} className='home-cart'>
              <Link onClick={() => clicktotf(el.id)} style={{ textDecoration: 'none', color: 'white' }} >
                <img className='home-cart-img' width={230} height={150} src={el.images[0]} alt="" />
                <h2>{el.title.length >= 20 ? `${el.title.slice(0, 20)}...` : el.title}</h2>
                <p>{el.category.name}</p>
                <div>
                  <h1 style={{ color: '#6C3EB8' }}>{el.price}$</h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <button onClick={datafilter.length > 0 ? seemorebtn : nulldata} className='home-btn-more'>{see == false ? 'See more' : "Close"}</button>
      </div> :<SimilarProducts  ideas={setIdeas} getId={getId}/>}

      {componentView?<div className='home-new-year-slice'>
        <div className='home-new-year-one'>

          <p style={{ fontSize: '70px', color: "#6C3EB8", padding: '0', margin: '0', boxSizing: 'border-box', textAlign: 'center', paddingTop: '90px' }}>NEW YEAR</p> <br />
          <p style={{ fontSize: '150px', color: "#6C3EB8", padding: '0', margin: '0', boxSizing: 'border-box', textAlign: 'center' }}>SALE</p>
          <img className='home-image-shoes' src={shoes} alt="" />
          <button className='home-btn-new-year'>See more</button>


        </div>
        <div className='home-new-year-two'>
          <img style={{ position: 'relative' }} src={imageNewYear} alt="" />

          <div className='home-text-sale-new-year'>save up to <span>50%</span> off</div>

        </div>
        <img className='home-image-play' src={playstation} alt="" />

      </div>:null}

      {componentView?<div className='home-filter'>
        <h2 className='home-text-product'>Less than 100$</h2>

        <div className={!seeMore ? 'home-filter-product-small' : 'home-filter-product-all'} style={{ width: '95%', display: 'flex', overflowY: 'auto', gap: '20px' }}>
          {productsData.filter(el => el.price <= 100).sort((a, b) => a.price - b.price).map(el => (
            <div key={el.id} className='home-cart'>
              <Link style={{textDecoration:'none',color:'white'}} onClick={()=>clicktotf(el.id)}><img className='home-cart-img' width={230} height={150} src={el.images[0]} alt="" />
              <h2>{el.title.length >= 20 ? `${el.title.slice(0, 20)}...` : el.title}</h2>
              <p>{el.category.name}</p>
              <div>
                <h1 style={{ color: '#6C3EB8' }}>{el.price}$</h1>
              </div></Link>
              
            </div>
          ))}
        </div>

        <button onClick={seeMoreBtnFilter} className='home-filter-btn'>{!seeMore ? 'See more' : 'Close'}</button>
      </div>:null}
      <ToastContainer />
    </div>
  )
}
export default Home