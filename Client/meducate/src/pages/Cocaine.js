import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Druglist from '../components/Druglist'

const Cocaine = () => {

  const[substances, setSubstances] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/drugs', 
    {params: {
      name: 'Cocaine'
    }}).then((res)=>{
      setSubstances(res.data);
    })
  },[])

  return (
    <Druglist name={'Cocaine'} url={"https://www.youtube.com/embed/OMMOlj68mnM?autoplay=1"} />
  )
}

export default Cocaine