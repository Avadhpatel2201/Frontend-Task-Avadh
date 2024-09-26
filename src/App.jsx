import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Slider from './components/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

  return (
    <>
      <CustomNavbar/>
      <Slider/>
      <Footer/>
    </>
  )
}

export default App
