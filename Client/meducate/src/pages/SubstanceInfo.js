import React from 'react'
import '../components/css/info.css'
import ListSubstances from '../components/ListSubstances.js';
import cocaine from '../images/cocaine.webp'
import tobacco from '../images/tobacco.webp'
import alcohol from '../images/alcohol.webp'
import marijuana from '../images/marijuana.webp'
import mdma from '../images/mdma.webp'
import ketamine from '../images/ketamine.webp'
import cb from '../images/2cb.webp'
import lsd from '../images/lsd.webp'
import mushrooms from '../images/mushrooms.webp'

const SubstanceInfo = () => {

  return (
    <>
    <div id="substancesholder">
      <ListSubstances drugname = {'Cocaine'} url={cocaine}/>
      <ListSubstances drugname = {'Tobacco'} url={tobacco}/>
      <ListSubstances drugname = {'Alcohol'} url={alcohol}/>
      <ListSubstances drugname = {'Marijuana'} url={marijuana}/>
      <ListSubstances drugname = {'MDMA'} url={mdma}/>
      <ListSubstances drugname = {'2C-B'} url={cb}/>
      <ListSubstances drugname = {'Acid (LSD)'} url={lsd}/>
      <ListSubstances drugname = {'Ketamine'} url={ketamine}/>
      <ListSubstances drugname = {'Magic Mushrooms'} url={mushrooms}/>
    </div>
    </>
  )
}

export default SubstanceInfo