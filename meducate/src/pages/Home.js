import Header from '../components/Header.js'
import MainBody from '../components/MainBody.js'

//Home Page
const Home = ( { animation , onAnimated}) => {
  //HTML to be rendered
  return(
    <>
    <Header status = { animation } onAnimated = { onAnimated }/>
    <MainBody />
    </>
  )
}

export default Home;