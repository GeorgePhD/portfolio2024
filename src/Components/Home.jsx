import {Link} from 'react-router-dom';
import Portfolio from '../Components/Portfolio'; 
import Services from '../Components/Services'; 
import Blog from '../Components/Blog'; 
import Contact from '../Components/Contact'; 
import '../../src/App.css';

const Home = () => {
  return (
    <div className='home-page'>
      <h1 className='home__title'> 
        Somos <strong className='span-black-color'>Let'sDevelopMe</strong> y desarrollamos <strong className='span-black-color'>sitios web.</strong> 
      </h1>

      <p className='text-centered'>
      servicios de programación y desarrollo en todo tipo de proyectos web.
      </p>

      <h2 className='home__subtitle--2'>Te ayudamos a transformar tus ideas en una aplicación web.</h2>

      <div className="home-page-links">
      <Link to='/contact' className='home__links'>Puedes contactarme acá</Link> 
      <Link to='/portfolio' className='home__links'>Ver proyectos</Link>
      </div>
      <Portfolio />
      <Services />
      <Blog />
      <Contact />
    </div>
  )
}
export default Home