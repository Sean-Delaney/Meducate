import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Druglist = ( {name, url} ) => {

  const[substances, setSubstances] = useState([])

  useEffect(()=>{
    axios.get('http://ec2-3-87-93-124.compute-1.amazonaws.com/drugs', 
    {params: {
      name: name
    }}).then((res)=>{
      console.log(res.data);
      setSubstances(res.data);
    })
  },[])

  return (
    <>
    <div id='holder'>
      <div id='main'>
        <div id='header'>
          <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
        </div>
        {substances.map((value)=>{
          return <>
          <h1>{value.name}</h1>
          <h3>The chemical makeup of {value.name} is : </h3>
          <h4>{value.chemical_formula}</h4>
          <h4>{value.name} has a half life of {value.half_life}</h4>
          <h3>What are the Pyschological effects of {value.name}?</h3>
          <ul>
            {value.mental_effects[0].map(item=>{
              return <li> {item}</li>
            })}
          </ul>
          <h3>What are the physical effects of {value.name}?</h3>
          <ul>
            {value.physical_effects[0].map(item=>{
              return <li> {item} </li>
            })}
          </ul>
          <h3>You may hear {value.name} being called by any of the following :</h3>
          <ul>
            {value.synonyms[0].map(syn =>{
              return <li>{syn}</li>
            })}
          </ul>
          <h3>In terms of testing {value.name}: </h3>
          <ul>
            <li>{value.testing}</li>
          </ul>
          </>
        })}
      </div>
    </div>
    </>
  )
}

export default Druglist