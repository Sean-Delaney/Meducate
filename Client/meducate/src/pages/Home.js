import { useEffect } from 'react'
import Header from '../components/Header.js'
import MainBody from '../components/MainBody.js'

//Home Page
const Home = ({status, onChange, text1, t1Change, text2, t2Change, state, icon}) => {

  useEffect(()=>{
    state('navbarwrapper');
    icon('menuicon');
  })

  //HTML to be rendered
  return(
    <>
    <Header status={status} onChange = {onChange} text1={text1} t1Change={t1Change} text2={text2} t2Change={t2Change}/>
    <MainBody />
    </>
  )
}

export default Home;