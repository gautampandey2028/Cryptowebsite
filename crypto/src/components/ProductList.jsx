import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
;
import { cryptoData, handleRefresh } from '../redux/dataSlice';
import { NavLink } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const ProductList = () => {
    const {apidata,isLoading}= useSelector(state => state.storedata)
    const [startIndex,setStartIndex]=useState(0)
    const [endIndex,setEndIndex]=useState(10)
    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(cryptoData())
    },[dispatch])

   
    const refresh=()=>{
     if (startIndex==90) {
      setStartIndex(0);
     } else{
      setStartIndex(startIndex+10);
     }
     if (endIndex==100) {
      setEndIndex(10);
     } else{
      setEndIndex(endIndex+10);
     }


        dispatch(handleRefresh())
        console.log(startIndex,endIndex);
        
    }
  return (
    <>
   {isLoading ? (<Button variant='contained'>Loading ....</Button>): (<Paper sx={{ width: '100%',margin:" auto",paddingTop:"6rem",paddingBottom:"4rem" }}>
<Typography>CRYPTO DATA`S LIST</Typography>
    <Button onClick={refresh} variant='contained'>Refresh</Button>
     <TableContainer component={Table}>
      <Table sx={{ minWidth:400}} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell align="left"> <Button variant='outlined'>Rank</Button> </TableCell>
            <TableCell align="left"> <Button variant='outlined'>Symbol</Button></TableCell>
            <TableCell align="left"> <Button variant='outlined'>Details</Button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apidata?. slice(startIndex,endIndex). map((item,index) => (
            <TableRow hover 
              key={item?.rank}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.rank}
              </TableCell>
              <TableCell align="left">{item.symbol}</TableCell>
             {/*  <TableCell align="left">{item.name}</TableCell> */}
              <TableCell align="left"><NavLink to={`/details/${item.id}`}><Button variant='contained'>Details </Button></NavLink></TableCell>
          
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>)}

   

    </>
  )
}

export default ProductList
