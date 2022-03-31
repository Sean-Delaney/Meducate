import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './css/info.css'
import img from '../images/cocaine.png';

const ListSubstances = () => {

  const[substances, setSubstances] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/drugs').then((res)=>{
      setSubstances(res.data);
    })
  },[])

  return (
    <>
    <div id="substancesholder">
      {substances.map(drug=>{
        return <Link to={drug.to} className='links'>
        <div className='drugDisplay'>
          <div className='displayHeader'>
            <h1>{drug.name}</h1>
          </div>
          <div className='displayClick'>
            <h3>Click here to see more</h3>
          </div>
          <div className='image'>
            <img src={img}/>
          </div>
        </div>
        </Link>
      })}
      </div>
    </>
  )
}

export default ListSubstances