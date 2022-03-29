import Header from '../components/Header.js'
import MainBody from '../components/MainBody.js'

//Home Page
const Home = ({status, onChange}) => {
  //HTML to be rendered
  return(
    <>
    <Header status={status} onChange = {onChange}/>
    <MainBody />
    </>
  )
}

export default Home;