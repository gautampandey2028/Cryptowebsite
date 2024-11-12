import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { cryptoDataDetails } from '../redux/dataSlice'

import SweetAlert from 'react-bootstrap-sweetalert'
import { Button } from '@mui/material'

const ProductDetails = () => {
    const {id}=useParams()
    const {apidataDetails,isLoading}=useSelector(state => state.storedata);
    console.log(apidataDetails)
    const dispatch=useDispatch();
    const navigate=useNavigate()
    useEffect(()=>{
        dispatch(cryptoDataDetails(`https://api.coincap.io/v2/assets/${id}`))
    },[dispatch])
  return (
    <>
   
    {isLoading ? (<Button variant='contained'>Loading....</Button>): ( <SweetAlert
    success 
    title={apidataDetails?.name}
   style={{boxShadow:"0 0 1rem 1rem rgb(20,20,20)"}}
    onConfirm={()=> navigate(-1)}
>
<ul>
<li>Rank : {apidataDetails?.rank}</li>
       <li>Symbol : {apidataDetails?.symbol}</li>
       <li>Name : {apidataDetails?.name}</li>
       <li>Supply : {apidataDetails?.supply}</li>
       <li>Max-Supply : {apidataDetails?.maxSupply}</li>
       <li>Market-Price-usd : {apidataDetails?.marketCapUsd}</li>
       <li>Volume-USD : {apidataDetails?.volumeUsd24Hr}</li>
       <li>Price-USD : {apidataDetails?.priceUsd}</li>
       <li>Change-Percent : {apidataDetails?.changePercent24Hr}</li>
       <li>Volume : {apidataDetails?.vwap24Hr}</li>
       <li>Explore : {apidataDetails?.explorer}</li>
       <br />
       <Button onClick={()=>navigate(-1)} variant='contained'>Back</Button>
</ul>
</SweetAlert>)}
   
   
    </>
  )
}

export default ProductDetails
