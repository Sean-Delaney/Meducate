import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './css/info.css'

const ListSubstances = ( { drugname, url }) => {

  const[substances, setSubstances] = useState([]);

  useEffect(()=>{
    axios.get('http://ec2-3-87-93-124.compute-1.amazonaws.com/drugs', {params : {
      name: drugname
    }}).then((res)=>{
      setSubstances(res.data);
    })
  },[])

  return (
    <>
      {substances.map(drug=>{
        return <Link to={drug.to} className='links'>
        <div className='drugDisplay'>

          <div className='displayHeader'>
            <h1>{drug.name}</h1>
          </div>

          <div className='image'>
            <img src={url} />
          </div>

          <div className='displayClick'>
            <h3>Click here to see more</h3>
          </div>
          
        </div>
        </Link>
      })}
    </>
  )
}

export default ListSubstances